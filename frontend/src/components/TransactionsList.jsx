// frontend/src/components/TransactionsList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const TransactionsList = ({ refresh }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/payments/transactions`);
      setTransactions(data);
    };
    fetchTransactions();
  }, [refresh]);

  return (
    <div className="transactions">
      <h2>📜 Transaction History</h2>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.transactionId}>
            <strong>{txn.beneficiaryName}</strong> - ₹{txn.amount} ({txn.paymentMode}) - <span>{txn.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
