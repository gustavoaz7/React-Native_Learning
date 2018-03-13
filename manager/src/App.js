import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import reducers from './reducers'
import firebaseConfig from '../config'
import LoginForm from './components/LoginForm'

const store = createStore(reducers)

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
    }

    render() {
        return (
            <Provider store={store} >
                <LoginForm />
            </Provider>
        )
    }
}

export default App
