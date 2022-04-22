import "reflect-metadata";
import "../../container";
import "dotenv";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import createConnection from "../typeorm";

createConnection();

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: "Inernal server error"
    })
})

export { app };