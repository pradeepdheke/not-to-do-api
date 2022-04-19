import "dotenv/config";

// const express = require('express');
import express from 'express'
const app = express();
const PORT = 8000;

// connect to mongodb
import mongoClient from './src/config/db.js'
mongoClient();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// lode modules
import taskRouter from './src/routers/taskRouter.js';

app.use("/api/v1/task", taskRouter);

import userRouter from './src/routers/userRouter.js';
app.use("/api/v1/user", userRouter);


app.use("/", (req, res) => {
    // const person = {
    //     name: "Pradeep",
    //     lastName: "Dheke"
    // }
    res.json({message: "You have reached to the api of not-to-do application"});
})

app.listen(PORT, error => {
    error
    ? console.log(error)
    : console.log(`Server is running http://localhost:${PORT}`);
});
