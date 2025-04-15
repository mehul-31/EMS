// components/Dashboard/EmployeeDashboard.jsx
import React, { useContext, useEffect, useState } from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { TaskContext } from '../../context/TaskProvider';

const EmployeeDashboard = ({ data }) => {
  const { tasks: contextTasks } = useContext(TaskContext);
  const [employeeTasks, setEmployeeTasks] = useState([]);
  
  useEffect(() => {
    // Get tasks from employee data in localStorage
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees && data?.email) {
      const employees = JSON.parse(storedEmployees);
      const employee = employees.find(emp => emp.email === data.email);
      if (employee && employee.tasks) {
        console.log('EmployeeDashboard - Found employee tasks:', employee.tasks);
        setEmployeeTasks(employee.tasks);
      }
    }
  }, [data?.email, contextTasks]);

  // Debug logs
  console.log('EmployeeDashboard - data prop:', data);
  console.log('EmployeeDashboard - context tasks:', contextTasks);
  console.log('EmployeeDashboard - employee tasks:', employeeTasks);

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen text-white overflow-y-scroll'>
      <Header data={data} />
      <div className='mt-8'>
        <div className='bg-[#2d2d2d] rounded-lg shadow-md p-6 border border-gray-700'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>Task Overview</h2>
          <TaskListNumbers tasks={employeeTasks} />
        </div>

        <div className='mt-8 bg-[#2d2d2d] rounded-lg shadow-md p-6 border border-gray-700'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl font-semibold text-white'>Your Tasks</h2>
            <div className='flex gap-2'>
              <span className='px-4 py-1.5 rounded-full text-sm font-bold bg-blue-500 bg-opacity-30 text-blue-300 border border-blue-400'>
                {employeeTasks.length} Total
              </span>
              <span className='px-4 py-1.5 rounded-full text-sm font-bold bg-green-500 bg-opacity-30 text-green-300 border border-green-400'>
                {employeeTasks.filter(task => task.active).length} Active
              </span>
            </div>
          </div>
          <TaskList tasks={employeeTasks} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
