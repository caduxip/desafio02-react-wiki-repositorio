import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { getRepository } from '../services/api';

jest.mock('../services/api', () => ({
  getRepository: jest.fn(),
}));

const repository = {
  id: 1,
  full_name: 'facebook/react',
  description: 'A declarative, efficient, and flexible JavaScript library for building UIs.',
  language: 'JavaScript',
  stargazers_count: 100,
  forks_count: 20,
  html_url: 'https://github.com/facebook/react',
};

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('shows a validation message when the search input is empty', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'Buscar' }));

    expect(getRepository).not.toHaveBeenCalled();
    expect(
      screen.getByText('Digite um repositório no formato owner/repository.'),
    ).toBeInTheDocument();
  });

  it('searches and renders a repository successfully', async () => {
    getRepository.mockResolvedValue(repository);

    render(<App />);

    await userEvent.type(
      screen.getByRole('textbox', { name: 'Digite o nome do repositório' }),
      'facebook/react',
    );
    await userEvent.click(screen.getByRole('button', { name: 'Buscar' }));

    expect(getRepository).toHaveBeenCalledWith('facebook/react');
    expect(await screen.findByRole('heading', { name: 'facebook/react' })).toBeInTheDocument();
    expect(screen.getByText('Repositório adicionado com sucesso.')).toBeInTheDocument();
    expect(screen.getByText('1 repositório encontrado')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Digite o nome do repositório' })).toHaveValue('');
  });

  it('prevents duplicate repositories from being added', async () => {
    getRepository.mockResolvedValue(repository);

    render(<App />);

    const input = screen.getByRole('textbox', { name: 'Digite o nome do repositório' });
    const button = screen.getByRole('button', { name: 'Buscar' });

    await userEvent.type(input, 'facebook/react');
    await userEvent.click(button);
    await screen.findByRole('heading', { name: 'facebook/react' });

    await userEvent.type(input, 'facebook/react');
    await userEvent.click(button);

    expect(await screen.findByText('Esse repositório já está na sua lista.')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { name: 'facebook/react' })).toHaveLength(1);
  });

  it('removes a repository from the list', async () => {
    getRepository.mockResolvedValue(repository);

    render(<App />);

    await userEvent.type(
      screen.getByRole('textbox', { name: 'Digite o nome do repositório' }),
      'facebook/react',
    );
    await userEvent.click(screen.getByRole('button', { name: 'Buscar' }));
    await screen.findByRole('heading', { name: 'facebook/react' });

    await userEvent.click(screen.getByRole('button', { name: 'Remover' }));

    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: 'facebook/react' })).not.toBeInTheDocument();
    });

    expect(screen.getByText('Nenhum repositório salvo ainda.')).toBeInTheDocument();
  });
});
