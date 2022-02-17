const express = require("express");
const app = express();
const port = 3001;
const axios = require("axios");

async function makeGetRequest() {
    let res = await axios.get("https://swapi.dev/api/films/1");

    let data = res.data;
    console.log(data.title);
}

makeGetRequest();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
