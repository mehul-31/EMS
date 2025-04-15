import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskProvider';

const AcceptTask = ({ task }) => {
  

  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleFail = () => {
    failTask(task.id);
  };

  return (
    <div className="relative flex-shrink-0 w-[calc(25%-20px)] h-[270px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {task.priority || "High"}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>

      <h2 className="mt-3 text-lg font-semibold">{task.taskTitle}</h2>

      <p className="text-sm mt-2 line-clamp-3 overflow-hidden text-ellipsis">
        {task.taskDescription}
      </p>

      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
        <button 
          className="bg-green-500 text-white px-3 py-1 rounded text-sm"
        >
          Mark as Completed
        </button>
        <button 
          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;