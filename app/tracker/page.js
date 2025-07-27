"use client";

import { useEffect, useState } from "react";

export default function TrackerPage() {
  const todayKey = new Date().toISOString().split("T")[0];
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // ✅ Load tasks from localStorage when page loads
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`dailyTasks-${todayKey}`)) || [];
    setTasks(saved);
  }, []);

  // ✅ Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`dailyTasks-${todayKey}`, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">📅 Daily Tracker</h1>

      <div className="w-full max-w-lg space-y-4">
        {/* Input + Add Button */}
        <div className="flex">
          <input
            type="text"
            className="flex-grow p-2 rounded-l bg-gray-800 border border-gray-700 text-white"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-green-500 px-4 rounded-r hover:bg-green-600"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-800 p-3 rounded"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(index)}
                  className="w-4 h-4"
                />
                <span className={task.done ? "line-through text-gray-400" : ""}>
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-400 hover:text-red-600"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {tasks.length === 0 && (
          <p className="text-gray-400 text-center mt-4">No tasks yet. Add one!</p>
        )}
      </div>
    </main>
  );
}
