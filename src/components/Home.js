import React, { useState, useEffect } from 'react';
import { AppHeader } from "./AppHeader";
import { useDispatch } from 'react-redux';
import { GetNews, NewsRecieved } from "../redux/reactredux/action";
import UpdateFeed from '../redux/reactredux/reducer';


export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(GetNews());
       
    }, []);


    return (
        <div className='Home'>
            <div>
                <AppHeader />
            </div>
        </div>
    )
}
