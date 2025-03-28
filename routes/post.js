const express = require('express');
const router = express.Router();
const title = [{'title': 'Post 1'}, {'title' : 'Post 2'}];
router.get('/', (req, res)=>{
    res.send(title);
});

router.get('/:title', (req, res)=>{
    let title = req.params.title;
    res.send({"title": title})
});

module.exports = router;