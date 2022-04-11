// const express = require('express');
import express from 'express'
const app = express();
const PORT = 8000;

// API end points

app.get("/api/v1/", (req, res) => {
    res.json({
        message: "Welcome to the api"
    })

})


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
