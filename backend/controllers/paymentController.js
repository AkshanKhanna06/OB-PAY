// backend/controllers/paymentController.js
const Transaction = require('../models/Transaction');
const generateTransactionId = require('../utils/generateTransactionId');

exports.initiatePayment = async (req, res) => {
  try {
    const { bank, beneficiaryName, accountNumber, ifscCode, amount, paymentMode } = req.body;
    
    if (!bank || !beneficiaryName || !accountNumber || !ifscCode || !amount || !paymentMode) {
      return res.status(400).json({ message: "❌ All fields are required" });
    }
    
    const transactionId = generateTransactionId();
    const referenceNumber = `REF-${Math.floor(1000000 + Math.random() * 9000000)}`;

    const transaction = await Transaction.create({
      transactionId,
      bank,
      beneficiaryName,
      accountNumber,
      ifscCode,
      amount,
      paymentMode,
      status: 'SUCCESS',  // Simulated as successful
      referenceNumber
    });

    res.status(201).json({
      message: "✅ Payment initiated successfully",
      transaction
    });
  } catch (error) {
    console.error("❌ Payment initiation error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error("❌ Error fetching transactions:", error);
    res.status(500).json({ message: "Server error" });
  }
};
