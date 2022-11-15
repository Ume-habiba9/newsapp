import { call, put, takeLatest } from "redux-saga/effects";
import { useState } from "react";
import axios, { require } from "axios";
import { GetNews, NewsRecieved } from "./action";
import NEWS_RECIEVED from "./constants";
import GET_NEWS from "./constants";
import { useDispatch } from "react-redux";
//function* makeGetRequest() {


//   axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=33ffb21e6e904f70b0033904beb0129d').then(function
//         (response) {
//         var articles = response.data.articles;
//         console.log(articles)
//     })
//         yield put({
//             type: NEWS_RECIEVED,
//             payload: articles
//         })
//         .catch(function (error) {
//             // handle error
// //             console.log(error);
//         })

// }
// async function makeGetRequest() {
//     try {
//       const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=33ffb21e6e904f70b0033904beb0129d');
//       console.log(response);
//     } catch   (error) {
//       console.error(error);
//     }
//   }
//makeGetRequest();
function* getfetchnews({ payload }) {
    const articles = yield call(axios.get,'https://newsapi.org/v2/top-headlines?country=us&apiKey=33ffb21e6e904f70b0033904beb0129d',payload);
    // yield call(makeGetRequest());
    // const Items = yield call(makeGetRequest)
    console.log(articles)
    yield put({
        type: NEWS_RECIEVED,
        payload: articles
    });
}
function* newssuccess() {
    yield takeLatest(GET_NEWS, getfetchnews);
}

export default newssuccess;