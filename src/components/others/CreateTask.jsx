import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskProvider';

const CreateTask = ({ employees }) => {
  const { addTask } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    taskTitle: '',
    taskDate: '',
    assignedTo: '',
    category: '',
    priority: 'Low',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.taskTitle || !formData.assignedTo) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('CreateTask - Submitting task with data:', {
      formData,
      selectedEmployee: employees.find(emp => emp.email === formData.assignedTo)
    });

    addTask({
      ...formData,
      assignedTo: formData.assignedTo,
      priority: formData.priority
    });

    // Reset form
    setFormData({
      taskTitle: '',
      taskDate: '',
      assignedTo: '',
      category: '',
      priority: 'Low',
      description: ''
    });
  };

  return (
    <div className='p-5 bg-[#2d2d2d] rounded-lg'>
      <form onSubmit={handleSubmit} className='flex flex-wrap w-full items-start justify-between gap-4'>
        <div className='w-full md:w-1/2 space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Task Title *</label>
            <input
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#1c1c1c] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
              type="text"
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Date</label>
            <input
              name="taskDate"
              value={formData.taskDate}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#1c1c1c] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
              type="date"
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Assign to *</label>
            <select
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#1c1c1c] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
              required
            >
              <option value="">Select Employee</option>
              {employees?.map(employee => (
                <option key={employee.email} value={employee.email}>
                  {employee.firstName} {employee.lastName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#1c1c1c] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className='w-full md:w-2/5'>
          <label className='block text-sm font-medium text-gray-300 mb-1'>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className='w-full h-44 px-3 py-2 bg-[#1c1c1c] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
            rows="4"
          ></textarea>
        </div>

        <div className='w-full flex justify-end mt-4'>
          <button
            type="submit"
            className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors'
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;