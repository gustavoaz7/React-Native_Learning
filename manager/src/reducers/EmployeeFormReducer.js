const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EMPLOYEE_UPDATE':
            return { ...state, [action.payload.key]: action.payload.value }
        case 'EMPLOYEE_CREATE':
            return INITIAL_STATE
        default:
            return state
    }
}