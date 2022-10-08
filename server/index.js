require('dotenv').config();
const express = require('express');
const model = require('./model');
const PORT = process.env.PORT || 5000;

const app = express();

try {
    app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));
} catch (e) {
    console.log(e);
}


app.get('/api', (req, res) => {
    model.getTable()
    .then(response => {
        res.json({ table: response});
    })
    .catch(e => {
        res.status(500).send(e);
    })
});