// backend/controllers/paymentController.js
const Transaction = require('../models/Transaction');
const generateTransactionId = require('../utils/generateTransactionId');

// Simulate payment processing (in real scenario, integrate with bank API)
exports.initiatePayment = async (req, res) => {
  try {
    const { bank, beneficiaryName, accountNumber, ifscCode, amount, paymentMode } = req.body;
    
    // Validate input (more robust validation can be added)
    if (!bank || !beneficiaryName || !accountNumber || !ifscCode || !amount || !paymentMode) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // Generate transaction id
    const transactionId = generateTransactionId();

    // Simulate reference number from bank API
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
      message: "Payment initiated successfully",
      transaction
    });
  } catch (error) {
    console.error("Payment initiation error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
