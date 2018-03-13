import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import reducers from './reducers'
import firebaseConfig from '../config'

const store = createStore(reducers)

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
    }

    render() {
        return (
            <Provider store={store} >
                <View>
                    <Text>Hello world</Text>
                </View>
            </Provider>
        )
    }
}

export default App
