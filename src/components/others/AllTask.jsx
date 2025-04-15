import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskProvider';

const AllTask = () => {
  const { tasks } = useContext(TaskContext);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    // If no tasks in context, get tasks from employee data
    if (tasks.length === 0) {
      const storedEmployees = localStorage.getItem('employees');
      if (storedEmployees) {
        const employees = JSON.parse(storedEmployees);
        // Get tasks from all employees
        const employeeTasks = employees.reduce((acc, employee) => {
          if (employee.tasks && Array.isArray(employee.tasks)) {
            const tasksWithEmployee = employee.tasks.map(task => ({
              ...task,
              assignedTo: employee.email,
              employeeName: employee.firstName || 'Employee' // Provide fallback if firstName is undefined
            }));
            return [...acc, ...tasksWithEmployee];
          }
          return acc;
        }, []);
        setAllTasks(employeeTasks);
      }
    } else {
      // For tasks from context, ensure they have employeeName
      const tasksWithNames = tasks.map(task => {
        if (!task.employeeName) {
          const storedEmployees = localStorage.getItem('employees');
          if (storedEmployees) {
            const employees = JSON.parse(storedEmployees);
            const employee = employees.find(emp => emp.email === task.assignedTo);
            return {
              ...task,
              employeeName: employee?.firstName || 'Employee'
            };
          }
        }
        return task;
      });
      setAllTasks(tasksWithNames);
    }
  }, [tasks]);

  const getStatusColor = (task) => {
    if (task.completion) return 'bg-green-500';
    if (task.failed) return 'bg-red-500';
    if (task.active) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  const getStatusText = (task) => {
    if (task.completion) return 'Completed';
    if (task.failed) return 'Failed';
    if (task.active) return 'In Progress';
    return 'New';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No date set';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (   
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-80 overflow-auto'>
      {allTasks.length === 0 ? (
        <div className='text-center text-gray-400 py-4'>
          No tasks available
        </div>
      ) : (
        allTasks.map((task, index) => (
          <div 
            key={index}
            className={`${getStatusColor(task)} mb-2 py-3 px-4 flex justify-between items-center rounded`}
          >
            <div className='flex-1'>
              <h2 className='font-medium text-white'>{task.employeeName}</h2>
              <p className='text-sm text-white opacity-80'>{formatDate(task.taskDate)}</p>
            </div>
            <div className='flex-1 text-center'>
              <h3 className='font-medium text-white'>{task.taskTitle}</h3>
              <p className='text-sm text-white opacity-80'>{task.priority} Priority</p>
            </div>
            <div className='flex-1 text-right'>
              <span className='px-3 py-1 rounded-full text-sm font-semibold bg-black bg-opacity-30 text-white border border-white border-opacity-20'>
                {getStatusText(task)}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTask;