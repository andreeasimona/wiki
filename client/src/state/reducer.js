import actionTypes from "./action";

function reducerPageRouter(state, action) {
    if (action.type === actionTypes.Create) {
        return { type: action.type};
    }
    if (action.type === actionTypes.Page) {
        return { type: action.type};
    }
    return state;
}
export default reducerPageRouter;
