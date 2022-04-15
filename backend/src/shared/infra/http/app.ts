import "reflect-metadata";
import "../../container"
import express from "express";
import "express-async-errors";
import { router } from "./routes";
import createConnection from "../typeorm";

createConnection();

const app = express();

app.use(express.json());

app.use(router);

export { app };