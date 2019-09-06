import axios from "axios"

import history from "../../history"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_NOW = "LOGOUT_NOW";


export function loginSuccess(){
    return {
        type: LOGIN_SUCCESS
    };
}

export function loginFailure(message){
    return {
        type: LOGIN_FAILURE,
        message: message
    };
}

export function logoutSuccess(){
    return {
        type: LOGOUT_NOW
    }
}

export function loginUser(email, password){
    return dispatch => {
        return axios 
            .post(`${process.env.REACT_APP_API_SERVER}/api/login`, {
                email: email,
                password: password
            })
            .then(response => {
                console.log(response);

                if(response.data == null){
                    dispatch(loginFailure("Unknown Error..."));
                } else if (!response.data.token){
                    dispatch(loginFailure(response.data.message));
                } else {
                    console.log(response.data.token);

                    localStorage.setItem("token", response.data.token);
                    dispatch(loginSuccess());

                    history.push(`/user`)
                }
            })
            .catch(err => console.log("Error: ", err))
    }
}

export function logoutNow() {
    return (dispatch) => {
        localStorage.clear('token');
        dispatch(logoutSuccess())
    }
}