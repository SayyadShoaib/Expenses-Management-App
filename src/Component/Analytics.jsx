import { PieChart, Pie, Tooltip } from "recharts";

import { useSelector } from "react-redux";
import "../CSS/Analytic.css";

function Analytics() {
  const data = useSelector((store) => {
    return store.data;
  });
  let salaryTotal = 0;
  let giftsTotal = 0;
  let refundsTotal = 0;
  let OtherTotal = 0;
  let FoodTotal = 0;
  let ShoppingTotal = 0;
  let HousingTotal = 0;
  let BillsTotal = 0;
  let VehicleTotal = 0;
  let LifestyleTotal = 0;

  let salary = {};
  let gifts = {};
  let refunds = {};
  let Other = {};
  let food = {};
  let Shopping = {};
  let housing = {};
  let bills = {};
  let vehicle = {};
  let lifestyle = {};
  let Incomearray = [];
  let Expensearray = [];

  for (const ele of data) {
    if (ele.source === "Salary") {
      salaryTotal = salaryTotal + ele.Amount;
      salary = { source: ele.source, amount: salaryTotal };
    } else if (ele.source === "Gifts") {
      giftsTotal = giftsTotal + ele.Amount;
      gifts = { source: ele.source, amount: giftsTotal };
    } else if (ele.source === "Refunds") {
      refundsTotal = refundsTotal + ele.Amount;
      refunds = { source: ele.source, amount: refundsTotal };
    } else if (ele.source === "Other") {
      OtherTotal = OtherTotal + ele.Amount;
      Other = { source: ele.source, amount: OtherTotal };
    } else if (ele.source === "Food & Drinks") {
      FoodTotal = FoodTotal - ele.Amount;
      food = { source: ele.source, amount: FoodTotal };
    } else if (ele.source === "Shopping") {
      ShoppingTotal = ShoppingTotal - ele.Amount;
      Shopping = { source: ele.source, amount: ShoppingTotal };
    } else if (ele.source === "Housing") {
      HousingTotal = HousingTotal - ele.Amount;
      housing = { source: ele.source, amount: HousingTotal };
    } else if (ele.source === "Bills") {
      BillsTotal = BillsTotal - ele.Amount;
      bills = { source: ele.source, amount: BillsTotal };
    } else if (ele.source === "Vehicle & Transport") {
      VehicleTotal = VehicleTotal - ele.Amount;
      vehicle = { source: ele.source, amount: VehicleTotal };
    } else if (ele.source === "Lifestyle") {
      LifestyleTotal = LifestyleTotal - ele.Amount;
      lifestyle = { source: ele.source, amount: LifestyleTotal };
    }
  }
  Incomearray.push(salary, gifts, refunds, Other);
  Expensearray.push(food, Shopping, housing, bills, vehicle, lifestyle);
  console.log(Expensearray);

  return (
    <>
      <div className="Analyticparent">
        <div className="IncomeChart">
          <h2>Income Chart</h2>{" "}
          <PieChart width={730} height={250}>
            <Pie
              data={Incomearray}
              dataKey="amount"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div>
          {" "}
          <h2>Expenses Chart</h2>{" "}
          <PieChart width={730} height={250}>
            <Pie
              data={Expensearray}
              dataKey="amount"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </>
  );
}
export default Analytics;
