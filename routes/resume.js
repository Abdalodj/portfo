const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/en', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index_en.html'));
});

router.get('/fr', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index_fr.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index_en.html'));
});

module.exports = router;