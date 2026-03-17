# GitHub Repository Explorer

Aplicação React para buscar repositórios públicos no GitHub, salvar resultados localmente e visualizar informações principais de cada projeto em uma interface simples, responsiva e focada em boa experiência de uso.

## Visão Geral

O projeto consome a API pública do GitHub para localizar repositórios no formato `owner/repository`, exibe os resultados em cards e mantém a lista salva no navegador com `localStorage`.

Além da busca funcional, a interface foi refinada com foco em:

- clareza visual
- feedback de estado
- acessibilidade básica
- organização de componentes
- separação entre UI e consumo de API

## Funcionalidades

- Busca de repositórios públicos pelo formato `owner/repository`
- Validação de campo antes do envio
- Tratamento de erro para repositórios inexistentes
- Prevenção de itens duplicados
- Persistência local da lista de repositórios
- Exibição de nome, descrição, linguagem, estrelas e forks
- Ação para abrir o repositório no GitHub
- Ação para remover repositórios da lista
- Interface responsiva com feedback visual de carregamento e mensagens de status

## Stack

- React 19
- Styled Components
- Axios
- Create React App

## Estrutura do Projeto

```text
src/
  assets/
    github-invertocat-white.svg
  components/
    Button/
    ItemRepo/
    input/
  pages/
    App.js
    styles.js
  services/
    api.js
  index.js
  styles.js
```

## Arquitetura

### `src/pages/App.js`

Componente principal da aplicação. Centraliza:

- estado da busca
- lista de repositórios
- mensagens de feedback
- persistência em `localStorage`
- integração com a camada de serviço

### `src/services/api.js`

Responsável por encapsular o acesso à API do GitHub. Isso reduz acoplamento entre a interface e a lógica de requisição.

### `src/components`

Contém componentes visuais reutilizáveis:

- `input`: campo de busca
- `Button`: botão principal da ação
- `ItemRepo`: card de exibição do repositório

## Como Executar

### Pré-requisitos

- Node.js 18+ recomendado
- npm ou yarn
- Docker e Docker Compose opcionais para ambiente isolado

### Instalação

```bash
npm install
```

ou

```bash
yarn
```

### Ambiente de desenvolvimento

```bash
npm start
```

Aplicação disponível em:

```text
http://localhost:3000
```

### Build de produção

```bash
npm run build
```

## Ambiente com Docker

O projeto inclui uma configuração de desenvolvimento com Docker pensada para uso local por outros desenvolvedores, com:

- ambiente padronizado com Node.js
- hot reload
- dependências isoladas no container
- bind mount do código-fonte para edição local

### Subir o ambiente

```bash
docker compose up --build
```

Aplicação disponível em:

```text
http://localhost:3000
```

### Executar em segundo plano

```bash
docker compose up --build -d
```

### Parar o ambiente

```bash
docker compose down
```

### Reinstalar dependências do container

Útil quando houver alteração em `package.json` ou `package-lock.json`.

```bash
docker compose down -v
docker compose up --build
```

### Executar comandos no container

```bash
docker compose exec app sh
```

Exemplo para rodar build:

```bash
docker compose exec app npm run build
```

## Arquivos Docker

- `Dockerfile`: imagem base de desenvolvimento com Node.js 20 Alpine
- `docker-compose.yml`: orquestra o serviço local, expõe a porta `3000` e mantém `node_modules` em volume dedicado
- `.dockerignore`: reduz o contexto de build e evita copiar artefatos desnecessários

## Como Usar

Digite no campo de busca um repositório no formato:

```text
facebook/react
```

ou

```text
vercel/next.js
```

Depois clique em `Buscar`.

## API Utilizada

O projeto utiliza a API pública do GitHub:

```text
GET https://api.github.com/repos/:owner/:repository
```

Exemplo:

```text
GET https://api.github.com/repos/facebook/react
```

## Boas Práticas Aplicadas

- Componentização por responsabilidade
- Reutilização de estilos com `styled-components`
- Separação de camada de serviço
- Tratamento explícito de loading, sucesso e erro
- Persistência local desacoplada da interface
- Botões e inputs com estados de foco, hover e disabled
- Mensagens de status com `aria-live`
- Links externos com `rel="noreferrer"`
- Ambiente de desenvolvimento containerizado para onboarding consistente

## Melhorias Futuras

- adicionar testes unitários e de integração
- criar componentes de domínio para `SearchForm`, `RepositoryList` e `EmptyState`
- suportar busca por usuário e listagem completa de repositórios
- paginação e ordenação de resultados
- internacionalização
- tema claro/escuro configurável

## Scripts Disponíveis

```bash
npm start
npm run build
npm test
```

## Testes

O projeto possui testes automatizados com foco no fluxo principal de busca e nas partes mais críticas da aplicação.

### Cobertura atual

- fluxo de busca de repositórios
- validação de formulário
- prevenção de duplicidade
- remoção de itens da lista
- integração da camada de serviço com a API do GitHub
- renderização do componente de repositório

### Executar testes em modo interativo

```bash
npm test
```

### Executar testes uma vez, em modo CI

```bash
CI=true npm test -- --watch=false
```

### Localização dos testes

```text
src/pages/App.test.js
src/services/api.test.js
src/components/ItemRepo/index.test.js
src/setupTests.js
```

## Status

Projeto funcional e pronto para evolução incremental.
