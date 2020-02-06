const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors())

const grounds = require('./data.json')

app.get('/api/grounds', (req, res) => {
    let rnd = randomIntFromInterval(0, 10)
    if (rnd >= 0) {
        const { sort_by, filter, search } = req.query;
        let groundsResult = grounds;

        if (filter) {
            let [min, max] = filter.split('-')
            groundsResult = groundsResult.filter((value) => filterPrice(value, min, max))
        }

        if (search) {
            console.log(search)
            groundsResult = groundsResult.filter(value => value.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (sort_by) {
            let sortColumns = sort_by.split(',')
            for (let column of sortColumns) {
                let type = column[0];
                let col = column.slice(1, column.length)
                groundsResult = groundsResult.sort((a, b) => compare(a, b, type, col))
            }
        }
        res.send(groundsResult)
    } else {
        res.status(404)
            .send('Not found');
    }
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


function compare(a, b, type, name) {
    const result = type === ' ' ? 1 : -1
    if (a[name] < b[name]) {
        return -result;
    }
    if (a[name] > b[name]) {
        return result
    }
    return 0
}

function filterPrice(value, min, max) {
    return (value.price > min && value.price < max)
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
