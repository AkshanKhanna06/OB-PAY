// backend/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { initiatePayment } = require('../controllers/paymentController');

router.post('/initiate-payment', initiatePayment);

module.exports = router;
