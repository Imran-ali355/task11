import React from 'react'

function event() {
  return (
    <div className='bg-gray-200 min-h-screen' >
    <div className="bg-blue-500 h-32 flex justify-center font-bold text-2xl text-white">
      <h1 className='pt-6'>Programing for Everyone</h1>
    </div>
    <div className="bg-gray-600 h-64 w-3/4  rounded-xl flex items-center m-auto -mt-11 ">
        <img src="img.jpg" className="rounded-full h-52 w-56  ml-10 " alt="" />
        <div className="flex-1  m-10 text-blue-500 font-bold"><p>icon</p>
        <p>2022-05-21 </p>
        <p>icon</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        
        </div>
 
    </div>
    <div className=''>
    <p className='text-center ml-32 mr-32 pt-5 '>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        voluptate cumque eum perferendis quam corporis unde mollitia!
        Perferendis magnam alias suscipit, quaerat sed consequuntur illo atque
        earum numquam tempore libero eum incidunt?
      </p>
    </div>

  </div>
  )
}

export default event