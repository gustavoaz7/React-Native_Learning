import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const employeeUpdate = ({ key, value }) => ({
    type: 'EMPLOYEE_UPDATE',
    payload: { key, value }
})

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => dispatch({ type: 'EMPLOYEE_CREATE' }))
        .then(() => Actions.reset('main'))  /* reset - Clears the routing stack and pushes the scene 
            into the first index (No transition & no Back button) */
}

export const employeesFetch = () => (dispatch) => {
    const { currentUser } = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: 'EMPLOYEES_FETCH_SUCCESS', payload: snapshot.val() })
        })
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => dispatch({ type: 'EMPLOYEE_SAVE_SUCCESS' }))
        .then(() => Actions.reset('main'))
}

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => Actions.reset('main'))
}
