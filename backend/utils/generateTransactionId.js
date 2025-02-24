// backend/utils/generateTransactionId.js
const generateTransactionId = () => {
    const now = new Date();
    const dateStr = now.toISOString().replace(/[-T:.Z]/g, "").slice(0, 12);
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `TXN-${dateStr}-${randomNum}`;
  };
  
  module.exports = generateTransactionId;
  