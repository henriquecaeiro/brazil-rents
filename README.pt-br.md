# Estimador de Aluguel - Brasil

Uma aplicação React que estima preços de aluguel em São Paulo, Brasil, utilizando um modelo de machine learning servido por um backend em FastAPI.

---

## Status

![GitHub last commit](https://img.shields.io/github/last-commit/henriquecaeiro/brazil-rents)

![GitHub repo size](https://img.shields.io/github/repo-size/henriquecaeiro/brazil-rents)
---

## Funcionalidades

- Estimar preços de aluguel com base nas características do imóvel (área, quartos, garagem).
- Filtrar por endereço, distrito e tipo de imóvel.
- Interface responsiva para mobile e desktop.
- Formulário dinâmico e interativo.

---

## Tecnologias

- **Frontend:** React 18, Vite, React Router
- **Estilização:** CSS Modules, Bootstrap 5
- **Cliente HTTP:** Axios
- **Lint & Formatação:** ESLint, Prettier

---

## Estrutura de Pastas

O projeto segue uma arquitetura *feature-first* para organizar os arquivos por funcionalidade.

```
src/
├── app/              # Configuração principal (App.jsx, rotas, providers)
├── contexts/         # Contextos React (ex: LoadingContext)
├── features/         # Módulos baseados em funcionalidades
│   └── <feature>/    # (ex: predict, rent)
│       ├── hooks/
│       └── service/
├── layouts/          # Componentes de layout (ex: MainLayout)
├── pages/            # Componentes de página (Home, About, etc.)
├── providers/        # Provedores de contexto React
└── shared/           # Código compartilhado entre funcionalidades
    ├── assets/
    ├── components/   # Componentes reutilizáveis (Button, Card, etc.)
    ├── constants/
    ├── hooks/
    ├── services/     # Serviços compartilhados (ex: http)
    ├── styles/
    └── utils/
```

---

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (>= 18.x)
- [npm](https://www.npmjs.com/) (ou yarn/pnpm)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/henriquecaeiro/brazil-rents.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd brazil-rents
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run build`: Compila a aplicação para produção.
-   `npm run preview`: Serve a build de produção localmente.
-   `npm run lint`: Executa o ESLint para análise do código.

---

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione a seguinte variável:

```env
# URL da API backend
VITE_API_URL=http://127.0.0.1:8000
```

---

## Rotas

A aplicação possui as seguintes rotas principais:

-   `/`: Página inicial com o estimador de aluguel.
-   `/sobre`: Sobre o projeto.
-   `/contato`: Informações de contato.
-   `/404`: Página de Não Encontrado.

---

## Endpoints da API

A aplicação interage com os seguintes endpoints da API:

-   `POST /predict`: Envia os dados do imóvel para obter uma estimativa de preço.
-   `GET /unique/{data}`: Busca valores únicos para os campos do formulário (`address`, `district`, `type`).

---

## Padrões de Código

-   **Estilização:** CSS Modules para estilos escopados por componente e Bootstrap para o sistema de grid e componentes base.
-   **Linting:** ESLint com a configuração recomendada para React.
-   **Formatação:** Prettier para um estilo de código consistente.
-   **Arquitetura:** *Feature-first* para manter a lógica relacionada agrupada.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autor

-   **Henrique Caeiro** - [GitHub](https://github.com/henriquecaeiro) | [LinkedIn](https://www.linkedin.com/in/henrique-caeiro-a28135269/)
