import { GET_NEWS } from "./constants";
import { NEWS_RECIEVED } from "./constants";


const instate = {
    articles: []
}

export const UpdateFeed = (state = instate, action) => {
    const { type, payload } = action
    switch (action.type) {
        case GET_NEWS:
            return {...state}
        case NEWS_RECIEVED:
            // return state.set("isloading", false).set("articles", payload);
            return {...state, articles:payload}
        default:
            return {...state}
    }
}
