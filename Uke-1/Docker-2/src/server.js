import express from "express";
const app = express();
const port = 7357;

app.get('/', (req, res, next) => {
    res.status(200).send("Welcome to my service using docker!");
});

app.listen(port, () => {
    console.log(`Started up server using port: ${port}`);
});