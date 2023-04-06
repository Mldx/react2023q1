import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  DELIVERY_CITY_IS_MISSING,
  DELIVERY_DATE_IS_MISSING,
  FILE_IS_MISSING,
  GENDER_IS_MISSING,
  NAME_IS_INCORRECT,
  NAME_IS_INCORRECT_LENGTH,
  NAME_IS_MISSING,
  NAME_IS_NOT_CAPITALIZE,
  PERSONAL_DATA_ACCESSES_IS_MISSING,
  SURNAME_IS_INCORRECT,
  SURNAME_IS_INCORRECT_LENGTH,
  SURNAME_IS_MISSING,
  SURNAME_IS_NOT_CAPITALIZE,
} from '../../../utils/validator';
import OrderingForm from './OrderingForm';

describe('OrderCard component testing', () => {
  describe('OrderCard field name', () => {
    it(`displays error message when name field is empty`, async () => {
      render(<OrderingForm />);
      const inputName = screen.getByLabelText('Name:');
      const submit = screen.getByText('Submit');
      const nameValue = '   ';
      await userEvent.type(inputName, nameValue);
      await userEvent.click(submit);
      expect(screen.queryByText(NAME_IS_MISSING)).toBeInTheDocument();
    });
    it(`displays error message when name field contains invalid characters`, async () => {
      render(<OrderingForm />);
      const inputName = screen.getByLabelText('Name:');
      const submit = screen.getByText('Submit');
      const nameValue = '!ada';
      await userEvent.type(inputName, nameValue);
      await userEvent.click(submit);
      expect(screen.queryByText(NAME_IS_INCORRECT)).toBeInTheDocument();
    });
    it(`displays error message when name field is not capitalized`, async () => {
      render(<OrderingForm />);
      const inputName = screen.getByLabelText('Name:');
      const submit = screen.getByText('Submit');
      const nameValue = 'anton';
      await userEvent.type(inputName, nameValue);
      await userEvent.click(submit);

      expect(screen.queryByText(NAME_IS_NOT_CAPITALIZE)).toBeInTheDocument();
    });
    it(`displays error message when name field length is incorrect`, async () => {
      render(<OrderingForm />);
      const inputName = screen.getByLabelText('Name:');
      const submit = screen.getByText('Submit');
      const nameValue = 'Ai';
      await userEvent.type(inputName, nameValue);
      await userEvent.click(submit);
      expect(screen.queryByText(NAME_IS_INCORRECT_LENGTH)).toBeInTheDocument();
    });
    it(`does not display any error messages when name field is valid`, async () => {
      render(<OrderingForm />);
      const inputName = screen.getByLabelText('Name:');
      const submit = screen.getByText('Submit');
      const nameValue = 'Anton';
      await userEvent.type(inputName, nameValue);
      await userEvent.click(submit);
      expect(screen.queryByText(NAME_IS_INCORRECT_LENGTH)).not.toBeInTheDocument();
      expect(screen.queryByText(NAME_IS_INCORRECT)).not.toBeInTheDocument();
      expect(screen.queryByText(NAME_IS_NOT_CAPITALIZE)).not.toBeInTheDocument();
      expect(screen.queryByText(NAME_IS_INCORRECT_LENGTH)).not.toBeInTheDocument();
    });
  });
  describe('OrderCard field surname', () => {
    it(`displays error message when surname field is empty`, async () => {
      render(<OrderingForm />);
      const inputSurname = screen.getByLabelText('Surname:');
      const submit = screen.getByText('Submit');
      const surnameValue = '   ';
      await userEvent.type(inputSurname, surnameValue);
      await userEvent.click(submit);
      expect(screen.queryByText(SURNAME_IS_MISSING)).toBeInTheDocument();
    });
    it(`displays error message when surname field contains invalid characters`, async () => {
      render(<OrderingForm />);
      const inputSurname = screen.getByLabelText('Surname:');
      const submit = screen.getByText('Submit');
      const surnameValue = '!ada';
      await userEvent.type(inputSurname, surnameValue);
      await userEvent.click(submit);
      expect(screen.queryByText(SURNAME_IS_INCORRECT)).toBeInTheDocument();
    });
    it(`displays error message when surname field is not capitalized`, async () => {
      render(<OrderingForm />);
      const inputSurname = screen.getByLabelText('Surname:');
      const submit = screen.getByText('Submit');
      const surnameValue = 'zaprutski';
      await userEvent.type(inputSurname, surnameValue);
      await userEvent.click(submit);

      expect(screen.queryByText(SURNAME_IS_NOT_CAPITALIZE)).toBeInTheDocument();
    });
    it(`displays error message when surname field length is incorrect`, async () => {
      render(<OrderingForm />);
      const inputSurname = screen.getByLabelText('Surname:');
      const submit = screen.getByText('Submit');
      const surnameValue = 'Le';
      await userEvent.type(inputSurname, surnameValue);
      await userEvent.click(submit);
      expect(screen.queryByText(SURNAME_IS_INCORRECT_LENGTH)).toBeInTheDocument();
    });
    it(`does not display any error messages when surname field is valid`, async () => {
      render(<OrderingForm />);
      const inputSurname = screen.getByLabelText('Surname:');
      const submit = screen.getByText('Submit');
      const surnameValue = 'Zaprutski';
      await userEvent.type(inputSurname, surnameValue);
      await userEvent.click(submit);
      expect(screen.queryByText(SURNAME_IS_INCORRECT_LENGTH)).not.toBeInTheDocument();
      expect(screen.queryByText(SURNAME_IS_INCORRECT)).not.toBeInTheDocument();
      expect(screen.queryByText(SURNAME_IS_NOT_CAPITALIZE)).not.toBeInTheDocument();
      expect(screen.queryByText(SURNAME_IS_INCORRECT_LENGTH)).not.toBeInTheDocument();
    });
  });
  it(`displays error message when delivery city is not selected`, async () => {
    render(<OrderingForm />);
    const selectDeliveryCity = screen.getByLabelText('Delivery city:');
    const submit = screen.getByText('Submit');
    await userEvent.click(selectDeliveryCity);
    await userEvent.click(submit);
    expect(screen.getByText(DELIVERY_CITY_IS_MISSING)).toBeVisible();
  });
  it(`displays error message when personal data access is not granted`, async () => {
    render(<OrderingForm />);
    const submit = screen.getByText('Submit');
    await userEvent.click(submit);
    expect(screen.getByText(PERSONAL_DATA_ACCESSES_IS_MISSING)).toBeVisible();
  });
  it(`displays error message when gender is not selected`, async () => {
    render(<OrderingForm />);
    const submit = screen.getByText('Submit');
    await userEvent.click(submit);
    expect(screen.getByText(GENDER_IS_MISSING)).toBeVisible();
  });
  it(`displays error message when avatar file is not uploaded`, async () => {
    render(<OrderingForm />);
    const submit = screen.getByText('Submit');
    await userEvent.click(submit);
    expect(screen.getByText(FILE_IS_MISSING)).toBeVisible();
  });
  it('displays error message when delivery date is not entered', async () => {
    render(<OrderingForm />);
    const inputDate = screen.getByLabelText('Delivery date:');
    const submit = screen.getByText('Submit');
    const dateValue = '   ';

    await userEvent.click(inputDate);
    await userEvent.type(inputDate, dateValue);
    await userEvent.click(submit);
    expect(screen.queryByText(DELIVERY_DATE_IS_MISSING)).toBeInTheDocument();
  });
});
