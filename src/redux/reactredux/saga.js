import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { NEWS_RECIEVED } from "./constants";
import { GET_NEWS } from "./constants";

function* getapinews(action) {
    try {
        const articles = yield call(axios.get,'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=53f3b6c8465f4315a0ab59a229db3d02', action.payload)

        yield put({
            type: NEWS_RECIEVED,
            payload: articles.data.articles
        })
    }
    catch (err) {
        console.log("Error")
    }
}
function* NewsSuccess() {
    yield takeLatest(GET_NEWS, getapinews);
}

export const fetchNews = [
    NewsSuccess(),
];