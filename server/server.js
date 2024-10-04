const express = require('express')
const {response} = require("express");
const cors = require('cors');
const app = express()
const port = 8080

app.get('/XSS', (req, res) => {
    console.log('Request on XSS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify({flag: "Some flag"}));
})

app.listen(port, () => {
    console.log(`Task server started on ${port}`);
})