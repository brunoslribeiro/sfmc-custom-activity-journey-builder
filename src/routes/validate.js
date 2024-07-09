const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('Validate endpoint called with success');
    res.status(200).send({ success: true });
});

module.exports = router;
