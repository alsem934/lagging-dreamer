// "use client";

// import { useEffect, useState } from "react";

// export default function StatsPage() {
//   const [stats, setStats] = useState([]);

//   useEffect(() => {
//     const today = new Date();
//     const results = [];

//     // Check the last 7 days
//     for (let i = 0; i < 7; i++) {
//       const date = new Date();
//       date.setDate(today.getDate() - i);
//       const key = date.toISOString().split("T")[0]; // YYYY-MM-DD

//       const tasks = JSON.parse(localStorage.getItem(`dailyTasks-${key}`)) || [];
//       const completed = tasks.filter((t) => t.done).length;

//       results.push({
//         date: key,
//         total: tasks.length,
//         completed,
//       });
//     }

//     setStats(results.reverse()); // Show oldest to newest
//   }, []);

//   return (
//     <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
//       <h1 className="text-4xl font-bold mb-6">📊 Weekly Progress</h1>

//       <div className="w-full max-w-lg space-y-3">
//         {stats.map((day, i) => (
//           <div
//             key={i}
//             className="bg-gray-800 p-4 rounded flex justify-between items-center"
//           >
//             <span className="font-medium">{day.date}</span>
//             <span className="text-green-400">
//               {day.completed}/{day.total} completed
//             </span>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
"use client";

import { useEffect, useState } from "react";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StatsPage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const today = new Date();
    const results = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const key = date.toISOString().split("T")[0];

      const tasks = JSON.parse(localStorage.getItem(`dailyTasks-${key}`)) || [];
      const completed = tasks.filter((t) => t.done).length;

      results.push({
        date: key,
        total: tasks.length,
        completed,
      });
    }

    setStats(results.reverse());
  }, []);

  // ✅ Weekly summary
  const totalTasks = stats.reduce((acc, d) => acc + d.total, 0);
  const completedTasks = stats.reduce((acc, d) => acc + d.completed, 0);
  const completionRate =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // ✅ Chart data
  const chartData = {
    labels: stats.map((d) => formatLabel(d.date)),
    datasets: [
      {
        label: "Completed Tasks",
        data: stats.map((d) => d.completed),
        backgroundColor: "rgba(34,197,94,0.7)", // Tailwind green-500
      },
      {
        label: "Total Tasks",
        data: stats.map((d) => d.total),
        backgroundColor: "rgba(59,130,246,0.5)", // Tailwind blue-500
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">📊 Weekly Progress</h1>

      {/* ✅ Weekly Summary */}
      <div className="bg-gray-800 p-4 rounded mb-6 w-full max-w-lg text-center">
        <p className="text-lg">Total Tasks: <span className="text-blue-400">{totalTasks}</span></p>
        <p className="text-lg">Completed: <span className="text-green-400">{completedTasks}</span></p>
        <p className="text-lg">Completion Rate: <span className="text-yellow-400">{completionRate}%</span></p>
      </div>

      {/* ✅ Empty State */}
      {totalTasks === 0 ? (
        <p className="text-gray-400 mt-6">No data yet. Start tracking your tasks!</p>
      ) : (
        <>
          {/* ✅ Chart */}
          <div className="bg-gray-800 p-4 rounded w-full max-w-2xl mb-8">
            <Bar data={chartData} />
          </div>

          {/* ✅ Daily Stats with Progress Bars */}
          <div className="w-full max-w-lg space-y-3">
            {stats.map((day, i) => {
              const percentage =
                day.total > 0 ? Math.round((day.completed / day.total) * 100) : 0;
              return (
                <div
                  key={i}
                  className="bg-gray-800 p-4 rounded"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{formatLabel(day.date)}</span>
                    <span className="text-green-400">
                      {day.completed}/{day.total} completed
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-3 rounded">
                    <div
                      className="bg-green-500 h-3 rounded"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
}

// ✅ Format labels (Today, Yesterday, or weekday)
function formatLabel(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  const diff = Math.floor((today - date) / (1000 * 60 * 60 * 24));

  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";

  return date.toLocaleDateString("en-US", { weekday: "short" });
}
