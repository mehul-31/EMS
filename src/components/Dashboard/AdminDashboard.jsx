import React, { useContext, useEffect, useState } from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import TaskOverview from '../others/TaskOverview';
import { AuthContext } from '../../context/AuthProvider';
import { TaskContext } from '../../context/TaskProvider';

const AdminDashboard = () => {
  const { userData } = useContext(AuthContext);
  const { tasks, setTasks } = useContext(TaskContext);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Get employees from localStorage
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    } else if (userData) {
      setEmployees(userData);
      localStorage.setItem('employees', JSON.stringify(userData));
    }

    // Get tasks from localStorage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        } else {
          console.error('Tasks data is not an array');
          setTasks([]);
        }
      } catch (error) {
        console.error('Error parsing tasks:', error);
        setTasks([]);
      }
    }
  }, [userData, setTasks]);

  return (
    <div className='min-h-screen w-full p-5 md:p-10 bg-[#1c1c1c] text-white'>
      <div className='max-w-7xl mx-auto'>
        <Header />
        
        <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='bg-[#2d2d2d] rounded-lg shadow-md p-6 border border-gray-700'>
            <h2 className='text-2xl font-semibold mb-4 text-white'>Create New Task</h2>
            <CreateTask employees={employees} />
          </div>
          
          <TaskOverview />
        </div>

        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>All Tasks</h2>
          <AllTask />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
