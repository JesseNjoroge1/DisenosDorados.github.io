/* eslint-disable import/no-anonymous-default-export */
import { 
    LOAD_SUBJECT_LIST_SUCCESS,
    LOAD_SUBJECT_LIST_FAIL
} from "../actions/types";

const initialState = {
    title: '',
    slug: ''
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type){
        case LOAD_SUBJECT_LIST_SUCCESS:
            return {
                ...state,
                title: payload.title,
                slug: payload.slug

            }
        case LOAD_SUBJECT_LIST_FAIL:
            return state
        default:
            return state
    };
};


// case REGISTER_SUCCESS:
//     return {
//         ...state,
//         isAuthenticated: false
//     }
// case LOGIN_SUCCESS:
//     return {
//         ...state,
//         isAuthenticated: true
//     }
// case LOGOUT_SUCCESS:
// case DELETE_USER_SUCCESS:
//     return {
//         ...state,
//         isAuthenticated: false
//     }
// case REGISTER_FAIL:
// case LOGIN_FAIL:
// case LOGOUT_FAIL:
// case DELETE_USER_FAIL:
//     return state