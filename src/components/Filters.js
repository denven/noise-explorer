import React from 'react'

const Filters = ({onClick}) => {
  return (
    <div 
      className='absolute z-30 w-full p-2 top-24 left-0 border border-black' 
      style={{height: window.innerWidth, backgroundColor: 'rgba(239, 239, 239, 0.83)'}} >
    
      <div className=" text-2xl text-center py-1 border-t-0 border-l-0 border-r-0 border-b border border-black">Filter</div>
      <CityFilter />
      <NoiseLevelFilter />
      <ReportedTimeFilter />

      <div className="text-right mr-4 font-medium" onClick={()=>onClick(false)}>Done</div>

    </div>

  )
}

const CityFilter = ({type}) => {

  return (
    <div className='px-2 pb-2 pt-4'>
      <h1 className='pb-1'>City</h1>
      <div className='flex flex-wrap justify-around'>
        <button className='rounded-md text-xs text-center my-1 px-10 py-1' style={{border: '1px solid #A3A3A3', maxWidth: 120}}>Richmond</button>
        <button className='rounded-md text-xs text-center my-1 px-10 py-1' style={{border: '1px solid #A3A3A3', maxWidth: 120}}>Burnaby</button>
        <button className='rounded-md text-xs text-center my-1 px-10 py-1' style={{border: '1px solid #A3A3A3', maxWidth: 120}}>Surrey</button>
        <button className='rounded-md text-xs text-center my-1 px-10 py-1' style={{border: '1px solid #A3A3A3', maxWidth: 120}}>Vancouver</button>
        <button className='rounded-md text-xs text-center my-1 px-10 py-1' style={{border: '1px solid #A3A3A3', maxWidth: 120}}>Coquilam</button>
        <button className='rounded-md text-xs text-center my-1 px-10 py-1' style={{border: '1px solid #A3A3A3', maxWidth: 120}}>Lanley</button>
      </div>
    </div>
  )
}


const NoiseLevelFilter = ({type}) => {

  return (
    <div className='px-2 pb-2 pt-4'>
      <h1 className='pb-1'>Noise Level</h1>
      <div className='flex flex-wrap justify-around'>
        <button className='rounded-md text-xs text-center my-1 px-2 py-1 flex justify-center items-center' style={{border: '1px solid #A3A3A3', minWidth: 110}}> 
          <div className='w-2 h-2 rounded-lg bg-green-400'></div> 
          <div className='ml-2'>30-75dbi </div></button>
        <button className='rounded-md text-xs text-center my-1 px-2 py-1 flex justify-center items-center' style={{border: '1px solid #A3A3A3', minWidth: 110}}> 
          <div className='w-2 h-2 rounded-lg bg-yellow-400'></div>
          <div className='ml-2'> 75-105dbi</div></button>
        <button className='rounded-md text-xs text-center my-1 px-2 py-1 flex justify-center items-center' style={{border: '1px solid #A3A3A3', minWidth: 110}}> 
          <div className='w-2 h-2 rounded-lg bg-red-400'></div> 10
          <div className='ml-2'>5dbi or higher</div></button>
      </div>
    </div>
  )
}

const ReportedTimeFilter = ({type}) => {

  return (
    <div className='px-2 pb-2 pt-4'>
      <h1 className='pb-1'>Reported Time</h1>
      <div className='flex flex-wrap justify-around'>
        <button className='rounded-md text-xs text-center my-1 px-4 py-1' style={{border: '1px solid #A3A3A3', minWidth: 180}}>Morning: 5am-12pm</button>
        <button className='rounded-md text-xs text-center my-1 px-4 py-1' style={{border: '1px solid #A3A3A3', minWidth: 180}}>Afternoon: 12pm-5pm</button>
        <button className='rounded-md text-xs text-center my-1 px-4 py-1' style={{border: '1px solid #A3A3A3', minWidth: 180}}>Evening: 5pm-9pm</button>
        <button className='rounded-md text-xs text-center my-1 px-4 py-1' style={{border: '1px solid #A3A3A3', minWidth: 180}}>Night: 9pm-4am</button>
      </div>
    </div>
  )
}

export default Filters;
