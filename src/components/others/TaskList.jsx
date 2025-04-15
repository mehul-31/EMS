import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-white mb-4">Task List</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-[#3d3d3d] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">{task.taskTitle}</h3>
                <p className="text-gray-400 text-sm mt-1">{task.taskDescription}</p>
              </div>
              <div className="flex items-center space-x-2">
                {task.newTask && !task.completion && !task.failed && (
                  <span className="text-blue-400 text-sm">🆕 New</span>
                )}
                {task.completion && (
                  <span className="text-green-400 text-sm">✅ Completed</span>
                )}
                {task.failed && (
                  <span className="text-red-400 text-sm">❌ Failed</span>
                )}
                {task.active && !task.completion && !task.failed && !task.newTask && (
                  <span className="text-yellow-400 text-sm">🟡 Active</span>
                )}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-400">
              <p>Assigned to: {task.assignedTo}</p>
              <p>Due date: {task.taskDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList; 