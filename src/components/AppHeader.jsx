import React from 'react'

export const AppHeader = () => {
  return (
    <div>
      <div className="bg-[#4c1d95] flex py-7 justify-between">
        <h3 className='text-white text-2xl font-bold px-8 py-3 italic font-serif'>Buzz News</h3>
        <div>
          <input className="bg-white  font-medium px-8 py-3 mx-9 outline-none rounded-md" type='search' placeholder='Search Here'></input>
        </div>
      </div>
      <div className='allnews flex flex-wrap flex-row'>
        <div className='headlines mx-9 my-9 px-9 py-9 bg-purple' >
          i am headlines
        </div>
      </div>
    </div>
  )
}
