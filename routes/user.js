const express = require('express');
const router = express.Router();
const user=[{'name' : 'John Doe'}, {'name':'orsd' }]
router.get('/', (req, res)=>
    res.send(user)
)

router.get('/:name', (req, res)=>{
    let name = req.params.name;
    res.send({"name": name})
})

module.exports = router;