import React from 'react';
import { ItemContainer } from "./styles";

function ItemRepo({ repo, onRemove }) {
  return (
    <ItemContainer>
      <h3>{repo.full_name}</h3>
      <p>{repo.description || 'Repositório sem descrição informada.'}</p>
      <div className="repoMeta" aria-label="Metadados do repositório">
        <span>{repo.language || 'Sem linguagem definida'}</span>
        <span>{repo.stargazers_count} estrelas</span>
        <span>{repo.forks_count} forks</span>
      </div>
      <div className="linkActions">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          Ver repositório
        </a>
        <button type="button" className="remover" onClick={() => onRemove(repo.id)}>
          Remover
        </button>
      </div>
      <hr/>
    </ItemContainer>
  );
}

export default ItemRepo;
