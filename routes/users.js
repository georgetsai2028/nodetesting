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

router
.route("/:id")
.get((req, res) => {
    res.send(`Get User With ID ${req.params.id}`);
})
.put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
})

router.param("id", (req, res, next, id) => {
    console.log(id);
    next();
})
module.exports = router