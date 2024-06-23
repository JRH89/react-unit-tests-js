import { UserList } from '@/components/UserList';
import { render, screen, waitFor } from '@testing-library/react';
import { server } from '../mocks/server';
import { rest } from 'msw';

describe('UserList - Rendering', () => {
  it('should have the text jared', async () => {
    render(<UserList />);
    expect(await screen.findByText('jared')).toBeInTheDocument();
    expect(screen.queryByText('No Users')).not.toBeInTheDocument();
  });

  it('should have username mike rendered', async () => {
    server.use(
      rest.get('/api/users', (req, res, ctx) => {
        return res(ctx.json([{ id: 2, username: 'steve' }]));
      })
    );
    render(<UserList />);
    expect(await screen.findByText('ryan')).toBeInTheDocument();
  });
});