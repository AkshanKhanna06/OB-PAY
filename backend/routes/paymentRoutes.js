// backend/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { initiatePayment, getAllTransactions } = require('../controllers/paymentController');

router.post('/initiate-payment', initiatePayment);
router.get('/transactions', getAllTransactions);

module.exports = router;
