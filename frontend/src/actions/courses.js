// import Cookies from 'js-cookie';
import axios from 'axios';
import {
    LOAD_SUBJECT_LIST_FAIL,
    LOAD_SUBJECT_LIST_SUCCESS,
} from './types';


// SUBJECT_DETAIL_SUCCESS,
// SUBJECT_DETAIL_FAILS,
// ENROLL_STUDENT_FAIL,
// ENROLL_STUDENT_SUCCESS
export const load_subject = () => async dispatch => {
    const config = {
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/subjects/`, config);

        if(res.data === null){
            dispatch({
                type: LOAD_SUBJECT_LIST_FAIL
            });
        } else {
            dispatch({
                type: LOAD_SUBJECT_LIST_SUCCESS,
                payload: res.data
            });
        }
    } catch (err) {
        dispatch({
            type: LOAD_SUBJECT_LIST_FAIL
        });
    }
};


// export const update_profile = () => async dispatch => {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'X-CSRFToken': Cookies.get('csrftoken')
//         }
//     };

//     const body = JSON.stringify({
//         'withCredentials': true,
//         first_name,
//         last_name,
//         phone,
//         city
//     });

//     try {
//         const res = await axios.put(`${process.env.REACT_APP_API_URL}/profile/update`, body, config);

//         if(res.data.profile && res.data.username) {
//             dispatch({
//                 type: UPDATE_USER_PROFILE_SUCCESS,
//                 payload: res.data
//             });
//         } else {
//             dispatch({
//                 type: UPDATE_USER_PROFILE_FAIL
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: UPDATE_USER_PROFILE_FAIL
//         });
//     }
// }