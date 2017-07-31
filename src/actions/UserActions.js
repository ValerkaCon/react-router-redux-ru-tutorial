/* eslint-disable no-unused-vars */
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../constants/User'
import { ROUTING } from '../constants/Routing'

export function login(payload)  {
    return (dispatch) => {
        
        dispatch({
            type: LOGIN_REQUEST
        })

        setTimeout(() => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    name: payload.name,
                    isAuthenticated: true
                }
            })
        }, 2000)

        dispatch({
            type: ROUTING,
            payload: {
                method: 'replace',
                nextUrl: '/admin'
            }
        })
    }
}

export function logout()  {
    return {
        type: LOGOUT_SUCCESS
    }
}
/* eslint-enable no-unused-vars */