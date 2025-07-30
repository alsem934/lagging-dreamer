"use client";

import { useEffect, useState } from "react";

export default function GoalsPage() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [targetDate, setTargetDate] = useState("");

  // ✅ Load saved goals
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(saved);
  }, []);

  // ✅ Save goals
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  // ✅ Add new goal
  const addGoal = () => {
    if (!newGoal.trim()) return;
    setGoals([
      ...goals,
      { title: newGoal, targetDate, milestones: [], completed: 0 },
    ]);
    setNewGoal("");
    setTargetDate("");
  };

  // ✅ Add milestone to a goal
  const addMilestone = (goalIndex, text) => {
    if (!text.trim()) return;
    const updated = [...goals];
    updated[goalIndex].milestones.push({ text, done: false });
    setGoals(updated);
  };

  // ✅ Toggle milestone completion
  const toggleMilestone = (goalIndex, milestoneIndex) => {
    const updated = [...goals];
    const milestone = updated[goalIndex].milestones[milestoneIndex];
    milestone.done = !milestone.done;
    setGoals(updated);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">🎯 Long-Term Goals</h1>

      {/* Add New Goal */}
      <div className="flex flex-col md:flex-row items-center gap-2 mb-6 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Enter a new goal..."
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          className="flex-grow p-2 rounded bg-gray-800 border border-gray-700 text-white"
        />
      <input
  type="date"
  value={targetDate}
  onChange={(e) => setTargetDate(e.target.value)}
  className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
  placeholder="Pick a date"
/>

        <button
          onClick={addGoal}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Goal
        </button>
      </div>

      {/* Goals List */}
      <div className="w-full max-w-3xl space-y-6">
        {goals.map((goal, goalIndex) => {
          const completedCount = goal.milestones.filter((m) => m.done).length;
          const totalMilestones = goal.milestones.length;
          const progress =
            totalMilestones > 0
              ? Math.round((completedCount / totalMilestones) * 100)
              : 0;

          return (
            <div key={goalIndex} className="bg-gray-800 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{goal.title}</h2>
                {goal.targetDate && (
                  <span className="text-gray-400 text-sm">
                    Target: {goal.targetDate}
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-3 rounded mb-3">
                <div
                  className="bg-green-500 h-3 rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Milestones */}
              <ul className="space-y-2">
                {goal.milestones.map((m, milestoneIndex) => (
                  <li
                    key={milestoneIndex}
                    className="flex justify-between items-center bg-gray-700 p-2 rounded"
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={m.done}
                        onChange={() =>
                          toggleMilestone(goalIndex, milestoneIndex)
                        }
                      />
                      <span
                        className={m.done ? "line-through text-gray-400" : ""}
                      >
                        {m.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Add Milestone Input */}
              <MilestoneInput
                onAdd={(text) => addMilestone(goalIndex, text)}
              />
            </div>
          );
        })}

        {goals.length === 0 && (
          <p className="text-gray-400 text-center">No goals yet. Add one!</p>
        )}
      </div>
    </main>
  );
}

// ✅ Component for adding milestones
function MilestoneInput({ onAdd }) {
  const [milestone, setMilestone] = useState("");

  return (
    <div className="flex mt-3">
      <input
        type="text"
        placeholder="Add milestone..."
        value={milestone}
        onChange={(e) => setMilestone(e.target.value)}
        className="flex-grow p-2 rounded-l bg-gray-700 border border-gray-600 text-white"
      />
      <button
        onClick={() => {
          onAdd(milestone);
          setMilestone("");
        }}
        className="bg-green-500 px-3 rounded-r hover:bg-green-600"
      >
        Add
      </button>
    </div>
  );
}
