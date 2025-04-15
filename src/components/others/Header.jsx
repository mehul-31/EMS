import React from 'react'

const Header = (data) => {
  data = data.data || {} // Ensure data is an object to avoid errors
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstName} 👋</span> </h1>
    </div>
  )
}

export default Header