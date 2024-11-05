import { Chart } from "chart.js/auto"
import { Bar } from "react-chartjs-2"


const Statistics = () => {
  const revenueData = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "sales",
        data: [6, 16, 12, 15, 10, 20, 19],
        backgroundColor: "rgba(141,110,235,0.8)",
      },
      {
        label: "profits",
        data: [4, 14, 10, 12, 10, 18, 17],
        backgroundColor: "rgba(34,197,94,0.4)",
      },
    ]
  };
  const revenueChartOptions = {
    scales: {
      x: {
        grid:{
          color:"rgba(229,231,235,0.4)",
        }
      },
      y: {
        beginAtZero: true,
        grid:{
          display: false,
        }
      }
    },
    plugins:{
      legend: {
        display: false
      }
    },
    barThickness:15,
    borderWidth:2,
    borderColor: "transparent",
    borderRadius:10,
  }

  return (
    <div className="md:border border-bordercolor md:p-4 rounded-lg mt-20 sm:mt-6">
      <div className="grid sm:grid-cols-3 gap-2">
        {/* box start */}
        <div className="p-4 rounded-lg transition-all bg-accent/10 hover:bg-accent/50 shadow-lg">
          <h4 className="text-tmuted text-left">Total Customers</h4>
          <div className="mt-2 lg:flex items-center justify-between gap-4">
            <h1 className="font-bold text-lg">67,909</h1>
            <p className="text-red-500 text-sm">+4.50%</p>
          </div>
        </div>
        {/* box end */}
        {/* box start */}
        <div className="p-4 rounded-lg transition-all bg-primary/10 hover:bg-primary/5 shadow-lg">
          <h4 className="text-tmuted text-left">Total Revenue</h4>
          <div className="mt-2 lg:flex items-center justify-between gap-4">
            <h1 className="font-bold text-lg">500,900</h1>
            <p className="text-green-500 text-sm">+8.950%</p>
          </div>
        </div>
        {/* box end */}
        {/* box start */}
        <div className="p-4 rounded-lg transition-all bg-green-300/10 hover:bg-green-300/5 shadow-lg">
          <h4 className="text-tmuted text-left">Total Income</h4>
          <div className="mt-2 lg:flex items-center justify-between gap-4">
            <h1 className="font-bold text-lg">$1.600m</h1>
            <p className="text-green-500 text-sm">+49950%</p>
          </div>
        </div>
        {/* box end */}
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Revenue Analytics</h3>
          <div className="flex item-center gap-4">
            <button className="bg-transparent border-bordercolor px-2 rounded-full text-xs text-tmuted hover:text-tcolor transition">Week</button>
            <button className="bg-transparent border-bordercolor px-2 rounded-full text-xs text-tmuted hover:text-tcolor transition">Month</button>
            <button className="bg-transparent border-bordercolor px-2 rounded-full text-xs text-tmuted hover:text-tcolor transition">Year</button>
          </div>
        </div>
      </div>
      <div className="my-4 ">
        <p className="text-lg text-tmuted">Income</p>
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-lg">$2003</h1>
          <p className="text-green-500 text-sm">+3.0%</p>
        </div>
        <p className="text-xs text-tmuted">Total income this week</p>
      </div>
      <div className="mt-8">
        <Bar data={revenueData} options={revenueChartOptions} />
      </div>
    </div>
  )
}

export default Statistics