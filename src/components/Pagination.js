import React, { useState } from 'react';

export const Pagination = (props) => {
    let mypages = Math.floor(totalposts / postsperpage);
    let totalposts;
    const [currentpage, setcurrentpage] = useState(1)
    const [postsperpage, setpostsperpage] = useState(21)
    const Lastpostindex = currentpage * postsperpage;
    const firstpostindex = Lastpostindex - postsperpage;

    let pages = [];
    for (let i = 1; i <= mypages; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                <button className='prev'></button>
                {pages}
                <button className='next'></button>
            </div>
        </div>
    )
}
