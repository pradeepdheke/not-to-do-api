const express = require('express:');
const app = express();
const PORT = 8000;


app.listen(PORT, error => {
    error
    ? console.log(error)
    : console.log(`Server is running http://localhost:${PORT}`);
});