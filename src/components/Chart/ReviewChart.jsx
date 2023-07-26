import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
const chartData = [
  { id: 1, name: "1 star", count: 0 },
  { id: 2, name: "2 star", count: 0 },
  { id: 3, name: "3 star", count: 0 },
  { id: 4, name: "4 star", count: 0 },
  { id: 5, name: "5 star", count: 10 },
];

const ReviewChart = () => {
  const chart = chartData.reverse();
  return (
    <div className="w-full mt-5">
      <p className="flex items-center gap-1  text-slate-300">
        <span className="text-xl font-semibold">5.0</span>
        <span className="text-amber-400 text-xl">
          <AiTwotoneStar />
        </span>
        <span className="text-sm">overall rating</span>
      </p>
      <div className="w-full flex flex-col gap-2 mt-5">
        {chart.map((data) => (
          <div key={data.id} className="w-full flex items-center">
            <p className="w-1/5 text-slate-200 font-semibold text-lg">
              {data.name}
            </p>
            <div className="w-3/5">
              <div className="relative w-full h-2 bg-slate-300 rounded-md">
                <div
                  style={{ width: data.count * 10 + "%" }}
                  className={`absolute max-w-full left-0 top-0 h-2 bg-amber-400 rounded-md`}
                ></div>
              </div>
            </div>
            <p className="w-1/5 text-slate-200 font-semibold text-lg text-right">
              {data.count * 10}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewChart;
