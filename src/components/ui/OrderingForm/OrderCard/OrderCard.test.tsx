import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import OrderCard from './OrderCard';
import { IOrderingFormData } from '../../../../types/types';
describe('OrderCard component testing', () => {
  const mockUser: IOrderingFormData = {
    name: 'Anton',
    surname: 'Zaprutski',
    gender: 'male',
    cityDelivery: 'Minsk',
    dateDelivery: '03/26/2023',
    personalData: true,
    avatar: undefined,
  };

  it(`testing field name and surname`, () => {
    render(<OrderCard data={mockUser} />);
    expect(screen.getByText('Anton Zaprutski')).toBeVisible();
  });
  it(`testing field gender`, () => {
    render(<OrderCard data={mockUser} />);
    expect(screen.getByText('male')).toBeVisible();
  });
  it(`testing field dateDelivery`, () => {
    render(<OrderCard data={mockUser} />);
    expect(screen.getByText('03/26/2023')).toBeVisible();
  });
  it(`testing field personalData`, () => {
    render(<OrderCard data={mockUser} />);
    expect(screen.getByText('agreed to use')).toBeVisible();
  });
});
