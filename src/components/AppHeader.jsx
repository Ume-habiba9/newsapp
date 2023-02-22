import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Pagination } from './Pagination';
export const AppHeader = () => {
  const [searchText, setsearchText] = useState('');
  const [filteredNews, setfilteredNews] = useState([])
  const [currentpage, setCurrentpage] = useState(1)
  const [ArticlesPerPage, setArticlesPerPag] = useState(12)
  const LastPageIndex = currentpage * ArticlesPerPage
  const firstPageIndex = LastPageIndex - ArticlesPerPage

  const onLoad = () => {
    axios.get("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=53f3b6c8465f4315a0ab59a229db3d02").then((response) => {
      const mydata = (response.data.articles)
      setfilteredNews(mydata)
    })

  }

  useEffect(() => {
    onLoad()
  }, [])
const currentnews=filteredNews.slice(firstPageIndex,LastPageIndex)
  const search = () => {
    axios.get(`https://newsapi.org/v2/everything?q=${searchText}&pageSize=90&apiKey=53f3b6c8465f4315a0ab59a229db3d02`).then((response) => {
      const showdata = (response.data.articles)
      setfilteredNews(showdata)
    });
   
    setsearchText('')
  }
  function setsearch(e) {
    setsearchText(e.target.value);

  }
  const CategoryBusiness = () => {
    axios.get('https://newsapi.org/v2/everything?q=business&pageSize=90&apiKey=53f3b6c8465f4315a0ab59a229db3d02').then((response) => {
      const filtereddata = (response.data.articles)
      setfilteredNews(filtereddata)
    })
  }
  const CategoryHeadlines = () => {
    axios.get('https://newsapi.org/v2/everything?q=headlines&pageSize=90&apiKey=53f3b6c8465f4315a0ab59a229db3d02').then((response) => {
      const filtereddata = (response.data.articles)
      setfilteredNews(filtereddata)
    })
  }
  const CategorySports = () => {
    axios.get('https://newsapi.org/v2/everything?q=sports&apiKey=53f3b6c8465f4315a0ab59a229db3d02').then((response) => {
      const filtereddata = (response.data.articles)
      setfilteredNews(filtereddata)
    })
  }
  const CategoryTechnology = () => {
    axios.get('https://newsapi.org/v2/everything?q=technology&pageSize=90&apiKey=53f3b6c8465f4315a0ab59a229db3d02').then((response) => {
      const filtereddata = (response.data.articles)
      setfilteredNews(filtereddata)
    })
  }
  const CategoryScience = () => {
    axios.get('https://newsapi.org/v2/everything?q=science&pageSize=90&apiKey=53f3b6c8465f4315a0ab59a229db3d02').then((response) => {
      const filtereddata = (response.data.articles)
      setfilteredNews(filtereddata)
    })
  }
  const CategoryEntertainment = () => {
    axios.get('https://newsapi.org/v2/everything?q=entertainment&pageSize=90&apiKey=53f3b6c8465f4315a0ab59a229db3d02').then((response) => {
      const filtereddata = (response.data.articles)
      setfilteredNews(filtereddata)
    })
  }
  const CategoryPolitical = () => {
    axios.get('https://newsapi.org/v2/everything?q=politics&pageSize=90&apiKey=53f3b6c8465f4315a0ab59a229db3d02').then((response) => {
      const filtereddata = (response.data.articles)
      setfilteredNews(filtereddata)
    })
  }
  return (
    <div className=''>
      <div className="bg-[#115e59] flex flex-wrap py-7 mobile:py-3 justify-between align-center tablet:justify-center mobile-justify-center">
        <h3 className='text-white text-2xl font-semibold mobile:mx-[128px] py-3 italic font-serif mobile:text-center'>Buzz News</h3>
        <div>
          <input className="bg-white font-medium px-8 py-2 my-3 mx-9 outline-none rounded-3xl" type='search' value={searchText}  onChange={(e) => setsearch(e)} placeholder='Search Here'></input>
          <button onClick={search} className='bg-white font-medium px-5 py-2 mr-9 outline-none rounded-3xl' type='submit'>Search</button>
        </div>
      </div>
      <div className='CategoryTabs flex flex-row flex-wrap justify-evenly align-center'>
        <button onClick={CategoryHeadlines} className='bg-[#f1f5f9] focus:bg-[#115e59] focus:text-white px-4 py-2 mx-2 my-3 text-emerald-900 hover:bg-[#115e59] hover:text-white font-xl rounded-2xl font-serif'>Headlines</button>
        <button onClick={CategoryPolitical} className='bg-[#f1f5f9] focus:bg-[#115e59] focus:text-white px-4 py-2 mx-2 my-3 text-emerald-900 hover:bg-[#115e59] hover:text-white font-xl rounded-2xl font-serif'>Political</button>
        <button onClick={CategoryBusiness} className='bg-[#f1f5f9] focus:bg-[#115e59] focus:text-white px-4 py-2 mx-2 my-3 text-emerald-900 hover:bg-[#115e59] hover:text-white font-xl rounded-2xl font-serif'>Business</button>
        <button onClick={CategoryTechnology} className='bg-[#f1f5f9] focus:bg-[#115e59] focus:text-white px-4 py-2 mx-2 my-3 text-emerald-900 hover:bg-[#115e59] hover:text-white font-xl rounded-2xl font-serif'>Technology</button>
        <button onClick={CategorySports} className='bg-[#f1f5f9] focus:bg-[#115e59] focus:text-white px-4 py-2 mx-2 my-3 text-emerald-900 hover:bg-[#115e59] hover:text-white font-xl rounded-2xl font-serif'>Sports</button>
        <button onClick={CategoryEntertainment} className='bg-[#f1f5f9] focus:bg-[#115e59] focus:text-white px-4 py-2 mx-2 my-3 text-emerald-900 hover:bg-[#115e59] hover:text-white font-xl rounded-2xl font-serif'>Entertainment</button>
        <button onClick={CategoryScience} className='bg-[#f1f5f9] focus:bg-[#115e59] focus:text-white px-4 py-2 mx-2 my-3 text-emerald-900 hover:bg-[#115e59] hover:text-white font-xl rounded-2xl font-serif'>Science</button>
      </div>
      <div className='flex flex-wrap align-center justify-center'>
        {
          currentnews
          && currentnews
            .map((currentnews
            ) => {
              return (
                <div className='flex flex-wrap flex-row'>
                  <div className="max-w-sm bg-white shadow-md dark:bg-gray-800 dark:border-gray-700 mx-7 my-9 " key={currentnews
                    .source.id}>
                    <a href="#">
                      <img className="rounded-t-lg" src={currentnews
                        .urlToImage ? currentnews
                        .urlToImage : 'https://th.bing.com/th/id/OIP.ewDa2eI464u8oj34rL7XlgHaE7?pid=ImgDet&rs=1'} alt="" />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{currentnews
                          .title}</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{currentnews
                        .description ? currentnews
                        .description : currentnews
                        .content}</p>
                      <a href={currentnews
                        .url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black" target="blank">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              )
            }
            )
        }
        <Pagination totalNews={filteredNews.length} newsPerPage={ArticlesPerPage} setCurrentpage={setCurrentpage}></Pagination>
      </div >
    </div >
  )
}

