import React from 'react'

export const Pagination = ({totalNews,newsPerPage,setCurrentpage }) => {
    let pages = []
    for (let i = 1; i <=Math.ceil(totalNews/newsPerPage); i++) {
        pages.push(i)
    }


    return (
        <div>
            {
                pages.map((page, index) => {
                    return <button onClick={()=>setCurrentpage(page)} className='bg-[#115e59] text-white font-medium py-2 px-4 m-2 outline-none rounded-3xl hover:bg-white hover:text-[#115e59] hover:outline-[#115e59]' key={index}>{page}</button>
                })
            }
        </div>
    )
}
