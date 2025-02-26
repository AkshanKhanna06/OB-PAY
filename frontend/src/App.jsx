// frontend/src/App.jsx
import { useState } from "react";
import TransactionForm from "./components/TransactionForm.jsx";
import TransactionsList from "./components/TransactionsList.jsx";

import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container">
      <h1>💰 Payment System</h1>
      <TransactionForm setRefresh={setRefresh} />
      <TransactionsList refresh={refresh} />
    </div>
  );
}

export default App;
