import React from 'react'

const TestSound = ({ onClick }) => {
  return (
    <div className='fixed h-14 inset-x-0 bottom-4 mx-8 border font-medium border-white rounded-md flex justify-center items-center'
      style={{ backgroundColor: '#FBED96', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      onClick={() => onClick(true)}
    >
      Test your surounding
    </div>
  )
}

export default TestSound;