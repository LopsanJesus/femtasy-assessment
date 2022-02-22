# Star Wars Episodes [![Netlify Status](https://api.netlify.com/api/v1/badges/0ddff8b2-17bb-4f7b-89a0-90fb9d2f2981/deploy-status)](https://app.netlify.com/sites/femtasy-assessment-jesus-lopez/deploys)

React application consuming [Swapi](https://swapi.dev/) for displaying data about the films and characters of Star Wars.

If you want to take a look on production: https://femtasy-assessment-jesus-lopez.netlify.app/

## Description

The project is composed of a client and a server:

-   **Client**: using React, TailwindCSS, Jest and Cypress.
-   **Server**: using Express, GraphQL and Jest.

## Installation

```sh
git clone https://github.com/LopsanJesus/femtasy-assessment.git
cd femtasy-assessment
```

Here you will find:

```
femtasy-assessment
├── frontend/
├── server/
└── README.md
```

Now, **we have to use 2 different command prompts**, in order to launch both server and client at the same time. But first, we install the dependencies.

In the first command prompt (located in our project):

```sh
# Frontend prompt
cd frontend
npm install
```

And, in the second one:

```sh
# Server prompt
cd server
npm install
```

To conclude our installation, we need to create a `.env` file. It will be placed in `frontend/.env`. You only have to write one line on it:

```sh
REACT_APP_SERVER_URL=http://localhost:3001/graphql
```

With this, we will be pointing the server URL for the client side.

## Launch

Now, we are ready to run our project:

```sh
# Server prompt
npm start
```

This will run our server in: http://localhost:3001/graphql.

```sh
# Frontend prompt
npm start
```

So now, we will have our client working on http://localhost:3000/.

## Testing

In order to test the project, you can run in both `frontend` and `server` the followind command:

```sh
npm test
```
