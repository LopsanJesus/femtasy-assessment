import "./App.scss";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmList from "./components/FilmList";
import Character from "./components/Character/Character";
import Film from "./components/Film/Film";

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
                <Router>
                    <h1 className="App-header">STAR WARS</h1>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<FilmList />} />
                            <Route path="film/:filmId" element={<Film />} />
                            <Route
                                path="character/:characterId"
                                element={<Character />}
                            />
                            <Route path="/*" element={<FilmList />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </ApolloProvider>
    );
}

export default App;
