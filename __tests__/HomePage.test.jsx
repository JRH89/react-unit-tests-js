import Home from '@/app/page';
import { render, screen, fireEvent } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '@/app/createMockRouter';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  const router = createMockRouter({ pathname: route });
  return {
    ...render(
      <RouterContext.Provider value={router}>
        {ui}
      </RouterContext.Provider>
    ),
    router,
  };
};

describe('Home Page', () => {
  describe('Rendering', () => {
    it('should have Home Page text', () => {
      renderWithRouter(<Home />);
      expect(screen.getByText('Home Page')).toBeInTheDocument();
    });

    it('should have button with text Go to Sign Up / Sign In', () => {
      renderWithRouter(<Home />);
      expect(
        screen.getByRole('button', { name: 'Go to Sign Up / Sign In' })
      ).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    it('should redirect to Sign Up / Sign In page on button click', () => {
      const { router } = renderWithRouter(<Home />);
      const button = screen.getByRole('button', { name: 'Go to Sign Up / Sign In' });
      fireEvent.click(button);
      expect(router.push).toHaveBeenCalledWith(
        '/SignUpSignIn',
        '/SignUpSignIn',
        expect.objectContaining({})
      );
    });
  });
});
