import "reflect-metadata";
import express from "express";
import  config  from "./ormconfig";
import { ConnectionOptions, createConnection } from "typeorm";
import { router } from "./routes";


createConnection(config as ConnectionOptions)
.then(async (connection) => {
    const app = express()
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    const port = 8080;
    app.use("/",router);
    app.listen(port, () => {
        console.log(`Server is rocking at ${port}`);
    });
}).catch((error) => {
    console.log(error);
});