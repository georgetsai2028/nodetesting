const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('user List');
})

router.get('/new', (req, res) => {
    res.send('user new form');
})

router.post('/', (req, res) => {
    res.send('Create User');
})

router.get('/:id', (req, res) => {
    res.send(`Get User With ID ${req.params.id}`);
})
module.exports = router