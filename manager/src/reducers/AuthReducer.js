const INITIAL_STATE = { 
    email: '',
    password: '',
    loading: false,
    error: '',
    user: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload }
        case 'PASSWORD_CHANGED':
            return { ...state, password: action.payload }
        case 'LOGIN_USER':
            return { ...state, loading: true, error: ''}
        case 'LOGIN_USER_SUCCESS':
            return { ...state, ...INITIAL_STATE, user: action.payload }
        case 'LOGIN_USER_FAIL':
            return { ...state, error: 'Authentication fail.', password: '', loading: false }
        default:
            return state
    }
}