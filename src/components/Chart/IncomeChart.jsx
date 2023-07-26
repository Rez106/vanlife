import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Ju", "Au", "Se", "Oc", "No", "De"],
  datasets: [
    {
      label: "",
      backgroundColor: [
        "#ffcc80",
        "#ffcc80",
        "#ffcc80",
        "#ffcc80",
        "#ffa726",
        "#ffa726",
      ],
      borderRadius: 5,
      data: [2000, 4000, 3000, 3000, 1000, 500],
    },
  ],
};

// maxIncome.map((income) => `$${(income / 1000).toFixed(0)}K`),
const IncomeChart = () => {
  return (
    <div className="w-full ">
      <Bar
        className="w-full"
        data={data}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default IncomeChart;
