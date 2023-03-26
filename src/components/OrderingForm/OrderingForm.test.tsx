import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  DELIVERY_CITY_IS_MISSING, GENDER_IS_MISSING,
  NAME_IS_INCORRECT_LENGTH, PERSONAL_DATA_ACCESSES_IS_MISSING,
  SURNAME_IS_INCORRECT,
} from '../../utils/validator';
import OrderingForm from './OrderingForm';

describe('OrderCard component testing', () => {
  it(`testing field name`, async () => {
    render(<OrderingForm />);
    const inputName = screen.getByLabelText('Name:');
    const submit = screen.getByText('Submit');
    const nameValue = 'Aa';
    await userEvent.type(inputName, nameValue);
    await userEvent.click(submit);
    expect(screen.getByText(NAME_IS_INCORRECT_LENGTH)).toBeVisible();
  });
  it(`testing field surname`, async () => {
    render(<OrderingForm />);
    const inputSurname = screen.getByLabelText('Surname:');
    const submit = screen.getByText('Submit');
    const surnameValue = '@1231';
    await userEvent.type(inputSurname, surnameValue);
    await userEvent.click(submit);
    expect(screen.getByText(SURNAME_IS_INCORRECT)).toBeVisible();
  });
  it(`testing field delivery city`, async () => {
    render(<OrderingForm />);
    const selectDeliveryCity = screen.getByLabelText('Delivery city:');
    const submit = screen.getByText('Submit');
    await userEvent.click(selectDeliveryCity);
    await userEvent.click(submit);
    expect(screen.getByText(DELIVERY_CITY_IS_MISSING)).toBeVisible();
  });
  it(`testing field personal data`, async () => {
    render(<OrderingForm />);
    const submit = screen.getByText('Submit');
    await userEvent.click(submit);
    expect(screen.getByText(PERSONAL_DATA_ACCESSES_IS_MISSING)).toBeVisible();
  });
  it(`testing field gender`, async () => {
    render(<OrderingForm />);
    const submit = screen.getByText('Submit');
    await userEvent.click(submit);
    expect(screen.getByText(GENDER_IS_MISSING)).toBeVisible();
  });
});
