const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors())

const grounds = require('./data.json')

app.get('/api/grounds', (req, res) => {
    const { sort_by, filter, search } = req.query;
    let groundsResult = grounds;

    if (filter) {
        let [min, max] = filter.split('-')
        groundsResult = groundsResult.filter((value) => filterPrice(value, min, max))
    }

    if (search) {
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
    console.log(req.query.sort_by)
    res.send(groundsResult)
})
app.get('/api/ground/:id', (req, res) => {
    console.log("AHIHI")
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