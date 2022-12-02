import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '.././../utils/test-utils';
// import { render, screen } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';
// import { render } from '@testing-library/react';

describe('ThemeSwitcher component', () => {
  test('should toggle theme between light and dark', async () => {
    render(<ThemeSwitcher />);
    const user = userEvent.setup();

    // //   why screen? Not "container" from "render" method? -> avoid implementation details!
    const toggleBtn = screen.getByRole('button', { name: /toggle theme/i });
    const message = screen.getByText(/theme:/i);

    expect(message).toHaveTextContent('Theme: light');
    await user.click(toggleBtn);
    expect(message).toHaveTextContent('Theme: dark');
    await user.click(toggleBtn);
    expect(message).toHaveTextContent('Theme: light');
  });
});
