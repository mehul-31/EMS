import React from 'react';

const TaskListNumbers = ({ tasks }) => {
  // Debug logs
  console.log('TaskListNumbers - Received tasks:', tasks);
  
  const newTasks = tasks.filter(task => task.newTask && !task.active && !task.completion && !task.failed);
  const activeTasks = tasks.filter(task => task.active && !task.completion && !task.failed && !task.newTask);
  const completedTasks = tasks.filter(task => task.completion);
  const failedTasks = tasks.filter(task => task.failed);

  // Debug logs for filtered tasks
  console.log('TaskListNumbers - New tasks:', {
    count: newTasks.length,
    tasks: newTasks.map(task => ({
      id: task.id,
      title: task.taskTitle,
      newTask: task.newTask,
      active: task.active,
      completion: task.completion,
      failed: task.failed
    }))
  });
  console.log('TaskListNumbers - Active tasks:', {
    count: activeTasks.length,
    tasks: activeTasks.map(task => ({
      id: task.id,
      title: task.taskTitle,
      newTask: task.newTask,
      active: task.active,
      completion: task.completion,
      failed: task.failed
    }))
  });
  console.log('TaskListNumbers - Completed tasks:', {
    count: completedTasks.length,
    tasks: completedTasks.map(task => ({
      id: task.id,
      title: task.taskTitle,
      newTask: task.newTask,
      active: task.active,
      completion: task.completion,
      failed: task.failed
    }))
  });
  console.log('TaskListNumbers - Failed tasks:', {
    count: failedTasks.length,
    tasks: failedTasks.map(task => ({
      id: task.id,
      title: task.taskTitle,
      newTask: task.newTask,
      active: task.active,
      completion: task.completion,
      failed: task.failed
    }))
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <div className='bg-[#3d3d3d] p-4 rounded-lg border border-gray-700'>
        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>New Tasks</span>
          <span className='text-blue-400 font-bold'>{newTasks.length}</span>
        </div>
      </div>
      <div className='bg-[#3d3d3d] p-4 rounded-lg border border-gray-700'>
        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>Active Tasks</span>
          <span className='text-green-400 font-bold'>{activeTasks.length}</span>
        </div>
      </div>
      <div className='bg-[#3d3d3d] p-4 rounded-lg border border-gray-700'>
        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>Completed Tasks</span>
          <span className='text-purple-400 font-bold'>{completedTasks.length}</span>
        </div>
      </div>
      <div className='bg-[#3d3d3d] p-4 rounded-lg border border-gray-700'>
        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>Failed Tasks</span>
          <span className='text-red-400 font-bold'>{failedTasks.length}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;
