const express = require('express');    

const router = express.Router();

router.get('/', (req, res) => {
    const users = [
        {name:"ronald", age:19},
        {name:"felipe", age:25}
    ]
    res.json(users)

});

// router.get('/alo', (req, res) => {
//     res.send('<h1>alo</h1>')
// });

module.exports = router;