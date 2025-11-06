# Brazil Rent Price Estimator

A React application that estimates rent prices in São Paulo, Brazil, using a machine learning model served by a FastAPI backend.

---

## Status

![GitHub last commit](https://img.shields.io/github/last-commit/henriquecaeiro/brazil-rents)
![GitHub repo size](https://img.shields.io/github/repo-size/henriquecaeiro/brazil-rents)
![GitHub license](https://img.shields.io/github/license/henriquecaeiro/brazil-rents)

---

## Features

- Estimate rent prices based on property features (area, bedrooms, garage).
- Filter by address, district, and property type.
- Responsive interface for mobile and desktop.
- Dynamic and interactive form.

---

## Tech Stack

- **Frontend:** React 18, Vite, React Router
- **Styling:** CSS Modules, Bootstrap 5
- **HTTP Client:** Axios
- **Linting & Formatting:** ESLint, Prettier

---

## Folder Structure

The project follows a feature-first architecture to organize files by functionality.

```
src/
├── app/              # Core app setup (App.jsx, routes, providers)
├── contexts/         # React contexts (e.g., LoadingContext)
├── features/         # Feature-based modules
│   └── <feature>/    # (e.g., predict, rent)
│       ├── hooks/
│       └── service/
├── layouts/          # Layout components (e.g., MainLayout)
├── pages/            # Page components (Home, About, etc.)
├── providers/        # React context providers
└── shared/           # Shared code across features
    ├── assets/
    ├── components/   # Reusable components (Button, Card, etc.)
    ├── constants/
    ├── hooks/
    ├── services/     # Shared services (e.g., http)
    ├── styles/
    └── utils/
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 18.x)
- [npm](https://www.npmjs.com/) (or yarn/pnpm)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/henriquecaeiro/brazil-rents.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd brazil-rents
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run preview`: Serves the production build locally.
-   `npm run lint`: Lints the codebase using ESLint.

---

## Environment Variables

Create a `.env.local` file in the root of the project and add the following variable:

```env
# URL of the backend API
VITE_API_URL=http://127.0.0.1:8000
```

---

## Routes

The application has the following main routes:

-   `/`: Home page with the rent estimator.
-   `/sobre`: About the project.
-   `/contato`: Contact information.
-   `/404`: Not Found page.

---

## API Endpoints

The application interacts with the following API endpoints:

-   `POST /predict`: Submits property data to get a rent price estimate.
-   `GET /unique/{data}`: Fetches unique values for form fields (`address`, `district`, `type`).

---

## Code Standards

-   **Styling:** CSS Modules for component-scoped styles and Bootstrap for the grid system and base components.
-   **Linting:** ESLint with the recommended React configuration.
-   **Formatting:** Prettier for consistent code style.
-   **Architecture:** Feature-first to keep related logic together.

---

## Testing

TODO: This project does not yet have an automated test suite configured.

---

## Deployment

TODO: The deployment for this project is not yet configured. Target platforms could include Vercel, Netlify, or a Docker container.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

-   **Henrique Caeiro** - [GitHub](https://github.com/henriquecaeiro) | [LinkedIn](https://www.linkedin.com/in/henrique-caeiro-a28135269/)