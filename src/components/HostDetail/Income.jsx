import { Link } from "react-router-dom";
import IncomeChart from "../Chart/IncomeChart";

const transactions = [
  { id: 1, amount: 720, date: "1/12/22" },
  { id: 2, amount: 560, date: "10/11/22" },
  { id: 3, amount: 980, date: "23/11/22" },
];

const Income = () => {
  return (
    <div className="w-full p-4">
      <h1 className="text-slate-200 text-4xl font-bold mb-3">Income</h1>
      <Link to="/host/income" className="text-slate-400 ">
        Last{" "}
        <span className="underline underline-offset-2 font-semibold">
          30 days
        </span>
      </Link>
      <p className="text-slate-200 font-bold text-3xl mt-5">$2,260</p>
      <IncomeChart />
      <div className="w-full mt-5">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-semibold text-slate-200">
            Your transactions
            <span className="text-lg">({transactions.length})</span>
          </h1>
          <Link to="/host/income" className="text-slate-400 text-sm">
            Last{" "}
            <span className="underline underline-offset-2 font-semibold">
              30 days
            </span>
          </Link>
        </div>
        <div className="w-full flex flex-col items-center gap-5 mt-5">
          {transactions.map((item) => (
            <div
              key={item.id}
              className="w-11/12 flex items-center justify-between bg-slate-600 py-5 px-3 rounded-lg"
            >
              <span className="text-slate-200 text-2xl font-bold">
                {item.amount}$
              </span>
              <span className="text-slate-200 text-sm font-semibold">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Income;
