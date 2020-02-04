const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors())

const grounds = require('./data.json')

app.get('/api/grounds', (req, res) => {
    res.send(grounds)
})
app.get('/api/ground/:id', (req, res) => {
    const { id } = req.params;
    const ground = grounds.filter(ground => ground.id == parseInt(id))[0]
    if (ground)
        res.send(ground)
    else
        res.send({})
})

app.listen(3001, (err) => {
    if (err) return;
    console.log('Ahihi port 3001')
})