import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import apiRoutes from "./routes/api";
import wikiRoutes from "./routes/wiki";

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 8142;

app.use("/api", apiRoutes);
app.use("/wiki", wikiRoutes);
app.get("/", (req, res) => {
    return res.end("Api working");
});

app.use((req, res, next) => {
    res.status(404).send("<h2 align=center>Page Not Found!</h2>");
});

app.listen(port, () => {
    console.log(`App Server Listening at ${port}`);
});
