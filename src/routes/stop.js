const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Stop endpoint called with success');      
    res.status(200).send({ success: true });
});

module.exports = router;
