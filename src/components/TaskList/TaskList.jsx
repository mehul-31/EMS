import React from "react";
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';

const TaskList = ({ tasks }) => {
  if (!tasks.length) return <p className="mt-10 text-center">No tasks assigned.</p>;

  // Filtering tasks based on different criteria
  const activeTasks = tasks.filter(task => task.active && !task.completion && !task.failed);
  const completedTasks = tasks.filter(task => task.completion);
  const newTasks = tasks.filter(task => task.newTask && !task.completion && !task.failed);
  const failedTasks = tasks.filter(task => task.failed);

  return (
    <div
      id="tasklist"
      className="flex space-x-5 w-full mt-10 overflow-x-auto py-5"
    >
      {/* Render all tasks for each category */}
      {activeTasks.map((task, index) => <AcceptTask key={`active-${index}`} task={task} />)}
      {completedTasks.map((task, index) => <CompleteTask key={`completed-${index}`} task={task} />)}
      {newTasks.map((task, index) => <NewTask key={`new-${index}`} task={task} />)}
      {failedTasks.map((task, index) => <FailedTask key={`failed-${index}`} task={task} />)}
    </div>
  );
};

export default TaskList;
