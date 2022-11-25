import React, { useState, useEffect } from 'react';
import { AppHeader } from "./AppHeader";
import { useSelector, useDispatch } from 'react-redux';
import { GetNews, NewsRecieved } from "../redux/reactredux/action";
import { NewsList } from './NewsList';
import App from '../App';
export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetNews())
        dispatch(NewsRecieved())
    }, [])
    return (
        <div className='Home'>
            <div className='w-[100%]'>
                <AppHeader />
            </div>
        </div>
    )
}
