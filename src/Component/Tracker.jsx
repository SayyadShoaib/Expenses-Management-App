import axios from "axios";
import "../CSS/Tracker.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function Tracker() {
  const loggedUser = useSelector((store) => {
    return store.login[0];
  });

  const [Incomestate, setIncome] = useState({
    LoggedUser: loggedUser.email,
    date: "",
    type: "Income",
    source: "",
    Amount: 0,
  });

  const [Expensesstate, setExpenses] = useState({
    LoggedUser: loggedUser.email,
    type: "Expenses",
    date: "",
    source: "",
    Amount: 0,
  });

  const handleIncome = (e) => {
    const Income = e.target.value;
    setIncome({ ...Incomestate, source: Income });
  };
  const handleIncomeAmount = (e) => {
    setIncome({ ...Incomestate, Amount: parseInt(e.target.value) });
  };

  const handleIncomedate = (e) => {
    setIncome({ ...Incomestate, date: e.target.value });
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    if (
      Incomestate.Amount !== 0 &&
      Incomestate.date !== "" &&
      Incomestate.source !== ""
    ) {
      axios
        .post("http://localhost:3000/data", Incomestate)
        .then((res) => {
          console.log(res.data);
          alert("Data has been Submitted");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(e);
    } else {
      alert("Fill all the fields");
    }
  };

  const handleExpenses = (e) => {
    const Expenses = e.target.value;
    setExpenses({ ...Expensesstate, source: Expenses });
  };

  const handleExpensesAmount = (e) => {
    setExpenses({
      ...Expensesstate,
      Amount: parseInt(-1) * parseInt(e.target.value),
    });
  };

  const handleExpensedate = (e) => {
    setExpenses({ ...Expensesstate, date: e.target.value });
  };

  const handleExpensesSubmit = (e) => {
    e.preventDefault();
    if (
      Expensesstate.Amount !== 0 &&
      Expensesstate.date !== "" &&
      Expensesstate.source !== ""
    ) {
      axios
        .post("http://localhost:3000/data", Expensesstate)
        .then((res) => {
          console.log(res.data);
          alert("Data has been Submitted");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(e);
    } else {
      alert("Fill all the fields");
    }
  };
  return (
    <>
      <div>
        <h2>Tracker</h2>
      </div>
      <div className="Parent">
        <form>
          <h3>Income Tracker</h3>
          <div>
            <select name="" id="" onChange={handleIncome} required>
              <option value="">Select Income Type</option>
              <option value="Salary">Salary</option>
              <option value="Gifts">Gifts</option>
              <option value="Refunds">Refunds</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter a Income Amount"
              required
              onChange={handleIncomeAmount}
            />
          </div>
          <div>
            <input type="date" onChange={handleIncomedate} required />
          </div>
          <div>
            {" "}
            <input type="submit" onClick={handleIncomeSubmit} />
          </div>
        </form>

        <form>
          <h3>Expenses Tracker</h3>
          <div>
            <select name="" id="" onChange={handleExpenses}>
              <option value="">Select Expense </option>
              <option value="Food & Drinks">Food & Drinks</option>
              <option value="Shopping">Shopping</option>
              <option value="Housing">Housing</option>
              <option value="Bills">Bills</option>
              <option value="Vehicle & Transport">Vehicle & Transport</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter a Expenses Amount"
              onChange={handleExpensesAmount}
            />
            <div>
              <div>
                <input type="date" onChange={handleExpensedate} />
              </div>{" "}
              <input type="submit" onClick={handleExpensesSubmit} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Tracker;
