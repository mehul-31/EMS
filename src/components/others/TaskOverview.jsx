import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskProvider';
import { AuthContext } from '../../context/AuthProvider';

const TaskOverview = () => {
  const { tasks: contextTasks } = useContext(TaskContext);
  const { userData } = useContext(AuthContext);
  const [employees, setEmployees] = useState([]);
  const [taskStats, setTaskStats] = useState({
    total: 0,
    active: 0,
    completed: 0,
    failed: 0
  });

  useEffect(() => {
    // Get the logged-in user from localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return;

    const { role, email } = JSON.parse(loggedInUser);
    
    // Get employees from localStorage
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      const parsedEmployees = JSON.parse(storedEmployees);
      setEmployees(parsedEmployees);

      if (role === "employee") {
        // For employee view, only show their tasks
        const employee = parsedEmployees.find(emp => emp.email === email);
        if (employee && employee.tasks) {
          const employeeTasks = employee.tasks;
          const stats = {
            total: employeeTasks.length,
            active: employeeTasks.filter(task => 
              task.active && !task.completion && !task.failed && !task.newTask
            ).length,
            completed: employeeTasks.filter(task => task.completion).length,
            failed: employeeTasks.filter(task => task.failed).length
          };
          setTaskStats(stats);
        }
      } else {
        // For admin view, show all tasks
        const allEmployeeTasks = parsedEmployees.reduce((acc, employee) => {
          if (employee.tasks && Array.isArray(employee.tasks)) {
            return [...acc, ...employee.tasks];
          }
          return acc;
        }, []);

        // Combine tasks from context and employees
        const allTasks = [...contextTasks, ...allEmployeeTasks];

        const stats = {
          total: allTasks.length,
          active: allTasks.filter(task => 
            task.active && !task.completion && !task.failed && !task.newTask
          ).length,
          completed: allTasks.filter(task => task.completion).length,
          failed: allTasks.filter(task => task.failed).length
        };
        setTaskStats(stats);
      }
    }
  }, [contextTasks, userData]);

  return (
    <div className="bg-[#2d2d2d] rounded-lg shadow-md p-6 border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 text-white">Task Overview</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#3d3d3d] p-4 rounded-lg border border-gray-600">
          <h3 className="text-lg font-medium text-gray-300">Total Tasks</h3>
          <p className="text-3xl font-bold text-blue-400">{taskStats.total}</p>
        </div>
        
        <div className="bg-[#3d3d3d] p-4 rounded-lg border border-gray-600">
          <h3 className="text-lg font-medium text-gray-300">Active Tasks</h3>
          <p className="text-3xl font-bold text-green-400">{taskStats.active}</p>
        </div>
        
        <div className="bg-[#3d3d3d] p-4 rounded-lg border border-gray-600">
          <h3 className="text-lg font-medium text-gray-300">Completed Tasks</h3>
          <p className="text-3xl font-bold text-emerald-400">{taskStats.completed}</p>
        </div>
        
        <div className="bg-[#3d3d3d] p-4 rounded-lg border border-gray-600">
          <h3 className="text-lg font-medium text-gray-300">Failed Tasks</h3>
          <p className="text-3xl font-bold text-red-400">{taskStats.failed}</p>
        </div>
      </div>

      {/* Only show employee list for admin */}
      {localStorage.getItem("loggedInUser") && 
       JSON.parse(localStorage.getItem("loggedInUser")).role === "admin" && (
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-300 mb-2">Available Employees</h3>
          <div className="bg-[#3d3d3d] p-4 rounded-lg border border-gray-600">
            <ul className="space-y-2">
              {employees.map((employee) => (
                <li key={employee.id} className="flex items-center justify-between text-gray-300">
                  <span>{employee.firstName}</span>
                  <span className="text-sm text-gray-400">{employee.email}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskOverview; 