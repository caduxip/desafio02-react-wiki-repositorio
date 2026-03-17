import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemRepo from './index';

const repository = {
  id: 1,
  full_name: 'facebook/react',
  description: '',
  language: null,
  stargazers_count: 10,
  forks_count: 5,
  html_url: 'https://github.com/facebook/react',
};

describe('ItemRepo', () => {
  it('renders repository data with fallback values', () => {
    render(<ItemRepo repo={repository} onRemove={jest.fn()} />);

    expect(screen.getByRole('heading', { name: 'facebook/react' })).toBeInTheDocument();
    expect(screen.getByText('Repositório sem descrição informada.')).toBeInTheDocument();
    expect(screen.getByText('Sem linguagem definida')).toBeInTheDocument();
    expect(screen.getByText('10 estrelas')).toBeInTheDocument();
    expect(screen.getByText('5 forks')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver repositório' })).toHaveAttribute(
      'href',
      repository.html_url,
    );
  });

  it('calls onRemove with the repository id', async () => {
    const onRemove = jest.fn();

    render(<ItemRepo repo={repository} onRemove={onRemove} />);

    await userEvent.click(screen.getByRole('button', { name: 'Remover' }));

    expect(onRemove).toHaveBeenCalledWith(repository.id);
  });
});
