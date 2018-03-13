import firebase from 'firebase'

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
            .then(user => dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user }))
            .catch((err) => {
                console.log(err)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user }))
                    .catch(() => dispatch({ type: 'LOGIN_USER_FAIL' }))
            })
    }
)
