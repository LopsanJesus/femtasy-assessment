const server = require("./server");
describe("graphql tests", () => {
    it("lists the films from Swapi", async () => {
        const result = await server.executeOperation({
            query: "{ films { title cover characters { name }} }",
        });

        expect(result.errors).toBeUndefined();
        expect(result.data?.films[0].title).toBe("A New Hope");
        expect(result.data?.films[0].characters).toBeNull();
    });

    it("finds a film in Swapi", async () => {
        const result = await server.executeOperation({
            query: "{ film(id: 4) { title director cover characters { name }} }",
        });

        expect(result.errors).toBeUndefined();
        expect(result.data?.film.title).toBe("The Phantom Menace");
        expect(result.data?.film.director).toBe("George Lucas");
        expect(result.data?.film.cover).toBe(
            "https://starwars-visualguide.com/assets/img/films/4.jpg"
        );
        expect(result.data?.film.characters[0].name).toBe("C-3PO");
    });

    it("finds a character in Swapi", async () => {
        const result = await server.executeOperation({
            query: "{ character(id: 1) { name picture} }",
        });

        expect(result.errors).toBeUndefined();
        expect(result.data?.character.name).toBe("Luke Skywalker");
        expect(result.data?.character.picture).toBe(
            "https://starwars-visualguide.com/assets/img/characters/1.jpg"
        );
    });
});
