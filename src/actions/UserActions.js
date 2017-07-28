/* eslint-disable no-unused-vars */
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../constants/User'

export function login(payload)  {
    return {
        type: LOGIN_REQUEST
    }
}

export function logout()  {
    return {
        type: LOGOUT_SUCCESS
    }
}
/* eslint-enable no-unused-vars */