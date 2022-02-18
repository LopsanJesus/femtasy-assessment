import logo from "./logo.svg";
import "./App.scss";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import Test from "./components/Test";

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_SERVER_URL,
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors }) => {
        console.log("graphQLErrors", graphQLErrors);
        console.log("networkError", networkError);
    },
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Test></Test>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ApolloProvider>
    );
}

export default App;
