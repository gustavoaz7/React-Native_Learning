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
