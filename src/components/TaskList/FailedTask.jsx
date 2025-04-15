const FailedTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 w-[calc(25%-20px)] h-auto p-5 bg-gray-400 rounded-xl relative">
      <div className="flex justify-between items-center">
        <h3 className="bg-gray-600 text-sm px-3 py-1 rounded">
          {task.priority || "Low"}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>

      <p className="text-sm mt-2">{task.taskDescription}</p>

      <div className="absolute bottom-5 left-5 right-5 flex justify-between">
        <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
          Retry Task
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
