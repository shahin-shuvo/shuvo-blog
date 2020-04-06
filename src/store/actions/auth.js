import axios from 'axios';
import * as actionTypes from './actionType';



export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    return {
        type: actionTypes.AUTH_LOGOUT,

    };
}


export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart);
        axios.post('https://shuvo-portal.herokuapp.com/rest-auth/login/', {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 10000);
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));

            })
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart);
        axios.post('https://shuvo-portal.herokuapp.com/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 10000);
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                axios.post('https://shuvo-portal.herokuapp.com/user/', {
                    username: username,
                    email: email,
                    password: password1,
                    token: localStorage.getItem('token')
                })

            })



    }

}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}