import "reflect-metadata";
import "../../container";
import "dotenv";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import createConnection from "../typeorm";
import cookieParser from "cookie-parser";
import { ErrorHandler } from "@shared/errors/ErrorHandler";

createConnection();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorHandler) {
        return res.status(400).json({
            message: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: `Internal server error ${err.message}`
    })
})

export { app };