const express = require('express');
const router = express.Router();

// ROUTES
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/saved', (req, res) => {
  res.render('saved');
});

// EXPORTS
module.exports = router;