import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskProvider';

const NewTask = ({ task }) => {
  const { acceptTask } = useContext(TaskContext);

  const handleAccept = () => {
    acceptTask(task.id);
  };

  return (
    <div className="flex-shrink-0 w-[calc(25%-20px)] h-auto p-5 bg-yellow-400 rounded-xl relative">
      <div className="flex justify-between items-center">
        <h3 className="bg-yellow-600 text-sm px-3 py-1 rounded">
          {task.priority || "Low"}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>

      <p className="text-sm mt-2">{task.taskDescription}</p>

      <div className="absolute bottom-5 left-5 right-5 flex justify-between">
        <button 
          onClick={handleAccept}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
