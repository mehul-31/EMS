import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        } else {
          console.error('Tasks data is not an array');
          setTasks([]);
        }
      }
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks]);

  const addTask = (newTask) => {
    console.log('TaskProvider - Adding new task:', newTask);

    const taskWithId = {
      ...newTask,
      id: Date.now(),
      newTask: true,
      active: false,
      completion: false,
      failed: false,
      taskDate: new Date().toLocaleDateString()
    };

    console.log('TaskProvider - Task with ID:', taskWithId);

    // Add task to context
    setTasks(prevTasks => [...prevTasks, taskWithId]);

    // Update employee's task array in localStorage
    try {
      const storedEmployees = localStorage.getItem('employees');
      console.log('TaskProvider - Current employees in localStorage:', storedEmployees);
      
      if (storedEmployees) {
        const employees = JSON.parse(storedEmployees);
        console.log('TaskProvider - Parsed employees:', employees);
        
        const updatedEmployees = employees.map(employee => {
          if (employee.email === newTask.assignedTo) {
            console.log('TaskProvider - Found matching employee:', employee);
            const updatedTasks = [...(employee.tasks || []), taskWithId];
            console.log('TaskProvider - Updated tasks for employee:', updatedTasks);
            
            const taskNumbers = {
              active: updatedTasks.filter(task => task.active).length,
              newTask: updatedTasks.filter(task => task.newTask).length,
              completion: updatedTasks.filter(task => task.completion).length,
              failed: updatedTasks.filter(task => task.failed).length
            };
            console.log('TaskProvider - Updated task numbers:', taskNumbers);
            
            return {
              ...employee,
              tasks: updatedTasks,
              taskNumbers
            };
          }
          return employee;
        });
        
        console.log('TaskProvider - Final updated employees:', updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        
        // Verify the update
        const verifyEmployees = localStorage.getItem('employees');
        console.log('TaskProvider - Verification of updated employees:', verifyEmployees);
      }
    } catch (error) {
      console.error('Error updating employee tasks in localStorage:', error);
    }
  };

  const updateTask = (taskId, updates) => {
    console.log('TaskProvider - Updating task:', { taskId, updates });
    
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, ...updates } : task
      )
    );

    // Also update the task in the employee's task array
    try {
      const storedEmployees = localStorage.getItem('employees');
      if (storedEmployees) {
        const employees = JSON.parse(storedEmployees);
        const updatedEmployees = employees.map(employee => {
          if (employee.tasks) {
            const updatedTasks = employee.tasks.map(task => 
              task.id === taskId ? { ...task, ...updates } : task
            );
            const taskNumbers = {
              active: updatedTasks.filter(task => task.active).length,
              newTask: updatedTasks.filter(task => task.newTask).length,
              completion: updatedTasks.filter(task => task.completion).length,
              failed: updatedTasks.filter(task => task.failed).length
            };
            return {
              ...employee,
              tasks: updatedTasks,
              taskNumbers
            };
          }
          return employee;
        });
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      }
    } catch (error) {
      console.error('Error updating employee tasks in localStorage:', error);
    }
  };

  const deleteTask = (taskId) => {
    console.log('TaskProvider - Deleting task:', taskId);
    
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));

    // Also delete the task from the employee's task array
    try {
      const storedEmployees = localStorage.getItem('employees');
      if (storedEmployees) {
        const employees = JSON.parse(storedEmployees);
        const updatedEmployees = employees.map(employee => {
          if (employee.tasks) {
            const updatedTasks = employee.tasks.filter(task => task.id !== taskId);
            const taskNumbers = {
              active: updatedTasks.filter(task => task.active).length,
              newTask: updatedTasks.filter(task => task.newTask).length,
              completion: updatedTasks.filter(task => task.completion).length,
              failed: updatedTasks.filter(task => task.failed).length
            };
            return {
              ...employee,
              tasks: updatedTasks,
              taskNumbers
            };
          }
          return employee;
        });
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      }
    } catch (error) {
      console.error('Error deleting task from employee in localStorage:', error);
    }
  };

  const acceptTask = (taskId) => {
    updateTask(taskId, { newTask: false, active: true });
  };

  const completeTask = (taskId) => {
    updateTask(taskId, { active: false, completion: true });
  };

  const failTask = (taskId) => {
    updateTask(taskId, { active: false, failed: true });
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      setTasks,
      addTask,
      updateTask,
      deleteTask,
      acceptTask,
      completeTask,
      failTask
    }}>
      {children}
    </TaskContext.Provider>
  );
}; 