import React from "react";
import GET_NEWS from "./constants";
import NEWS_RECIEVED from "./constants";


const instate = {
    articles: []
}

const UpdateFeed = (state = instate, action) => {
    const { type, payload } = action;
    switch (action.type) {
        case GET_NEWS:
                return state;

        case NEWS_RECIEVED:
            return state.set('articles', payload)
        default:
            return state;
    }
}
export default UpdateFeed;