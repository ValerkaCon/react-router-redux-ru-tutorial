import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../constants/User'

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {}

export default function (state = initialState) {
        switch(action.type) {
            case LOGIN_REQUEST:
                return {}
            case LOGIN_SUCCESS:
                return {}
            case LOGIN_FAIL:
                return {}
            case LOGOUT_SUCCESS:
                return {}
            default:
                return {}
        }
}
