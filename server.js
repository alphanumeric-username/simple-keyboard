const express = require('express');
const app = express();

app.use(express.static('./'))

const IP = '0.0.0.0', PORT = 8080;

app.listen(8080, '0.0.0.0', () => {
    console.log(`Listening on ${IP}:${PORT}`);
})