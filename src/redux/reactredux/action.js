import NEWS_RECIEVED from "./constants";
import GET_NEWS from "./constants";
import axios from "axios";
export const GetNews = (payload) => {
    return {
        type: GET_NEWS,
        payload: payload,
    };
};
export const NewsRecieved = (payload) => {
    return {
        type: NEWS_RECIEVED,
        payload: payload,
    }
}
// export const GetNews = () => {
//     return (dispatch) => {
//       axios
//         .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=33ffb21e6e904f70b0033904beb0129d")
//         .then(({ data }) => dispatch({ type: GET_NEWS, payload: data }))
//         .catch((err) => dispatch({ type: GET_NEWS, error: err }));
//     };
//   };