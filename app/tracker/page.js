"use client";

import { useState, useEffect } from "react";

export default function TrackerPage() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // ✅ Load today's tasks
  useEffect(() => {
    const saved = localStorage.getItem(`dailyTasks-${today}`);
    if (saved) setTasks(JSON.parse(saved));
  }, [today]);

  // ✅ Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem(`dailyTasks-${today}`, JSON.stringify(tasks));
  }, [tasks, today]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-2">📅 Daily Task Tracker</h1>
      <p className="text-gray-400 mb-6">{today}</p>

      {/* ✅ Progress Summary */}
      <div className="mb-4 text-green-400 font-semibold">
        Completed: {completedCount}/{tasks.length}
      </div>

      {/* ✅ Input */}
      <div className="flex gap-2 w-full max-w-md mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          placeholder="Enter a task..."
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
        >
          Add
        </button>
      </div>

      {/* ✅ Task List */}
      <ul className="w-full max-w-md space-y-2">
        {tasks.map((t, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-gray-800 p-3 rounded"
          >
            <span
              onClick={() => toggleTask(i)}
              className={`cursor-pointer ${
                t.done ? "line-through text-gray-400" : ""
              }`}
            >
              {t.text}
            </span>
            <button
              onClick={() => deleteTask(i)}
              className="text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
