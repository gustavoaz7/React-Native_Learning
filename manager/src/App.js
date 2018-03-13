import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'

import reducers from './reducers'
import firebaseConfig from '../config'
import Router from './Router'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
// second paramenter: any initial state

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
    }

    render() {
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        )
    }
}

export default App
