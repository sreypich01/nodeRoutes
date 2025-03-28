const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>
    res.send([{"comment": "Hello"}, {'comment': "have a nice day"}])
);

router.get('/:id',(req,res)=>{
    let id= req.params.id;
    res.send({'id': id})
})
module.exports = router;