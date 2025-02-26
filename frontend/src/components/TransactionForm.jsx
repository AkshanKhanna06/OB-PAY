// frontend/src/components/TransactionForm.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TransactionForm = ({ setRefresh }) => {
  const [form, setForm] = useState({
    bank: "",
    beneficiaryName: "",
    accountNumber: "",
    ifscCode: "",
    amount: "",
    paymentMode: "NEFT"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/payments/initiate-payment`, form);
      toast.success("✅ Payment Successful");
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error("❌ Payment Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="bank" placeholder="Bank Name" required onChange={handleChange} />
      <input type="text" name="beneficiaryName" placeholder="Beneficiary Name" required onChange={handleChange} />
      <input type="text" name="accountNumber" placeholder="Account Number" required onChange={handleChange} />
      <input type="text" name="ifscCode" placeholder="IFSC Code" required onChange={handleChange} />
      <input type="number" name="amount" placeholder="Amount" required onChange={handleChange} />
      <select name="paymentMode" onChange={handleChange}>
        <option value="NEFT">NEFT</option>
        <option value="RTGS">RTGS</option>
      </select>
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default TransactionForm;
