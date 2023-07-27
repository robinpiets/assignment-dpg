import { render, screen } from '@testing-library/react';
import { HouseDetail } from './HouseDetail';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<HouseDetail />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
