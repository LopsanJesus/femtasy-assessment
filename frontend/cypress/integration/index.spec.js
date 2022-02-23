describe("e2e tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("shows six films", () => {
        cy.get(".FilmListContent").children().should("have.length", 6);
    });

    it("shows the first film", () => {
        cy.get(".FilmListContent div").first().click();
        cy.get(".Film h3").should("have.text", "A New Hope");
    });

    it("shows one film by url", () => {
        cy.visit("http://localhost:3000/film/4");
        cy.get(".Film h3").should("have.text", "The Phantom Menace");
    });

    it("can mark as favorite a film", () => {
        cy.get(".FilmListContent div").first().click();
        cy.get(".favorite-star")
            .click()
            .get("span")
            .should("have.class", "text-star");
    });

    it("shows one character name", () => {
        cy.get(".FilmListContent div").first().click();
        cy.get(".CharacterListContent div").first().click();
        cy.get(".Character h3").should("have.text", "Luke Skywalker");
    });

    it("shows one character by url", () => {
        cy.visit("http://localhost:3000/character/3");
        cy.get(".Character h3").should("have.text", "R2-D2");
    });

    it("can mark as favorite a character", () => {
        cy.get(".FilmListContent div").first().click();
        cy.get(".CharacterListContent div").first().click();
        cy.get(".favorite-star")
            .click()
            .get("span")
            .should("have.class", "text-star");
    });
});
