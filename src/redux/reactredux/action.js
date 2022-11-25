import {NEWS_RECIEVED} from "./constants";
import {GET_NEWS} from "./constants";
import axios from "axios";
export const GetNews = () => {
    return {
        type: GET_NEWS,
    };
};
export const NewsRecieved = (newsitems) => {
    return {
        type: NEWS_RECIEVED,
        payload: newsitems,
    }
}










