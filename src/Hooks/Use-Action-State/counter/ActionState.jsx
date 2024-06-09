import { useReducer } from "react";

// define the reducer function
function reducer(state, action){
    switch(action.type){
        case "COUNTER_INCREMENT":
            return { ...state, count: state.count + 1};
        case "COUNTER_DECREMENT":
            return { ...state, count: state.count - 1};
        case "FORM_FIELD_VALUE_UPDATE":
            return { ...state, [action.field] : action.value};
        case "FETCH_START":
            return { ...state, loading: true, msg: state.msg};
        case "FETCH_SUCCESS":
            return { ...state, loading: false, data: action.payload, isError: false, msg: "Data Fetched"};
        case "FETCH_ERROR":
            return { ...state, loading: false, data: [], isError: true, msg: action.error};
        case "TOGGLE_COMPONENT":
            return { ...state, isOpen: !state.isOpen}
        default:
            return state;
    }
}

function useActionState(initialState){
    return useReducer(reducer, initialState);
}

export default useActionState;