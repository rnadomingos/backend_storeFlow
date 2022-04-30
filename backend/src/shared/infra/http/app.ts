import "reflect-metadata";
import "../../container";
import "dotenv";
import "express-async-errors";
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express';
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import cors from "cors";
import createConnection from "../typeorm";
import cookieParser from "cookie-parser";
import { ErrorHandler } from "@shared/errors/ErrorHandler";
import { join } from "path"



createConnection();

const app = express();

app.use(express.json());
app.use(cookieParser());

const swaggerPath = join(__dirname, '../../../../swagger.YAML')
const swaggerFile = YAML.load(swaggerPath)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors());
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