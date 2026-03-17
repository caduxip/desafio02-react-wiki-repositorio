import gitLogo from '../assets/github-invertocat-white.svg';
import { useEffect, useState } from "react";
import {Container} from "./styles";
import Input from "../components/input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { getRepository } from "../services/api";

const LOCAL_STORAGE_KEY = 'github-favorite-repositories';
const STATUS = {
  idle: 'idle',
  loading: 'loading',
  error: 'error',
  success: 'success',
};

function App() {
  const [repositoryName, setRepositoryName] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);
  const [message, setMessage] = useState('Pesquise um repositório público para adicioná-lo à lista abaixo.');

  useEffect(() => {
    const storedRepositories = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!storedRepositories) {
      return;
    }

    try {
      setRepositories(JSON.parse(storedRepositories));
    } catch {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(repositories));
  }, [repositories]);

  const handleSearchRepo = async (event) => {
    event.preventDefault();

    const trimmedRepository = repositoryName.trim();

    if (!trimmedRepository) {
      setStatus(STATUS.error);
      setMessage('Digite um repositório no formato owner/repository.');
      return;
    }

    setStatus(STATUS.loading);
    setMessage('Buscando repositório...');

    try {
      const data = await getRepository(trimmedRepository);

      const repoAlreadyExists = repositories.some((currentRepo) => currentRepo.id === data.id);

      if (repoAlreadyExists) {
        setStatus(STATUS.error);
        setMessage('Esse repositório já está na sua lista.');
        return;
      }

      setRepositories((previousRepos) => [data, ...previousRepos]);
      setRepositoryName('');
      setStatus(STATUS.success);
      setMessage('Repositório adicionado com sucesso.');
    } catch {
      setStatus(STATUS.error);
      setMessage('Não foi possível encontrar esse repositório. Verifique o nome e tente novamente.');
    }
  };

  const handleRemoveRepo = (repoId) => {
    setRepositories((previousRepos) => previousRepos.filter((repo) => repo.id !== repoId));
  };

  return (
    <Container>
      <div className="appShell">
        <header className="hero">
          <img src={gitLogo} alt="GitHub Logo" className="githubLogo" />
          <span className="eyebrow">GitHub profile explorer</span>
          <h1>Pesquise repositórios com uma interface mais clara e objetiva.</h1>
          <p>
            Digite o nome de um repositório para consultar informações rapidamente e organizar
            seus resultados em um só lugar.
          </p>
        </header>

        <section className="searchPanel" aria-label="Busca de repositórios">
          <div className="searchIntro">
            <strong>Buscar repositório</strong>
            <span>Use o formato `owner/repository` para encontrar resultados com mais precisão.</span>
          </div>

          <form onSubmit={handleSearchRepo}>
            <div className="searchRow">
              <Input
                placeholder="Ex.: facebook/react"
                ariaLabel="Digite o nome do repositório"
                value={repositoryName}
                onChange={(event) => setRepositoryName(event.target.value)}
              />
              <Button type="submit" disabled={status === STATUS.loading}>
                {status === STATUS.loading ? 'Buscando...' : 'Buscar'}
              </Button>
            </div>
          </form>

          <p className={`feedback${status === STATUS.error ? ' error' : ''}`} role="status" aria-live="polite">
            {message}
          </p>
        </section>

        <section className="resultsSection" aria-label="Resultados da busca">
          <div className="resultsHeader">
            <strong>Resultados</strong>
            <span>{repositories.length} {repositories.length === 1 ? 'repositório encontrado' : 'repositórios encontrados'}</span>
          </div>

          {repositories.length === 0 ? (
            <div className="emptyState">
              <strong>Nenhum repositório salvo ainda.</strong>
              <span>Faça uma busca acima para começar sua lista.</span>
            </div>
          ) : (
            repositories.map((repo) => (
              <ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />
            ))
          )}
        </section>
      </div>
    </Container>
  );
}

export default App;
