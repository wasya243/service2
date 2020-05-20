// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const app = express();

const {PORT, HOST} = process.env;

app.get('/a', (req, res) => {
    res.send("2");
});

app.listen(PORT, () => console.log(`service2 listening at ${HOST}:${PORT}`));