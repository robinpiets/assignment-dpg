import { render, screen } from '@testing-library/react';
import { Houses } from './Houses';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Houses />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
