import { createStore } from "redux";
import action from "./action";
import reducer from "./reducer";

const initialState = {
    type: action.Page
};

const store = createStore(reducer, initialState);

export default store;
