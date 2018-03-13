import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const emailChanged = text => ({
    type: 'EMAIL_CHANGED',
    payload: text
})

export const passwordChanged = text => ({
    type: 'PASSWORD_CHANGED',
    payload: text
})

export const loginUser = ({ email, password }) => (
    dispatch => {
        dispatch({ type: 'LOGIN_USER'})

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((err) => {
                console.log(err)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => dispatch({ type: 'LOGIN_USER_FAIL' }))
            })
    }
)

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user })
    Actions.main()
}