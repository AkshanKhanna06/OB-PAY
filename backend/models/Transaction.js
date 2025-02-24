// backend/models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true, unique: true },
  bank: { type: String, required: true },
  beneficiaryName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  ifscCode: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMode: { type: String, enum: ['NEFT', 'RTGS'], required: true },
  transactionTime: { type: Date, default: Date.now },
  status: { type: String, default: 'PENDING' },
  referenceNumber: { type: String }
});

module.exports = mongoose.model('Transaction', transactionSchema);
