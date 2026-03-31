const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('home');
});

// Viaje route
router.get('/viaje', (req, res) => {
  res.render('viaje');
});

module.exports = router;