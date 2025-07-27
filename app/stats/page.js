"use client";

import { useEffect, useState } from "react";

export default function StatsPage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const today = new Date();
    const results = [];

    // Check the last 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const key = date.toISOString().split("T")[0]; // YYYY-MM-DD

      const tasks = JSON.parse(localStorage.getItem(`dailyTasks-${key}`)) || [];
      const completed = tasks.filter((t) => t.done).length;

      results.push({
        date: key,
        total: tasks.length,
        completed,
      });
    }

    setStats(results.reverse()); // Show oldest to newest
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">📊 Weekly Progress</h1>

      <div className="w-full max-w-lg space-y-3">
        {stats.map((day, i) => (
          <div
            key={i}
            className="bg-gray-800 p-4 rounded flex justify-between items-center"
          >
            <span className="font-medium">{day.date}</span>
            <span className="text-green-400">
              {day.completed}/{day.total} completed
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
