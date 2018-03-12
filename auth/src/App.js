import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
const firebaseConfig = require('../firebaseConfig')

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            firebaseConfig
        })
    }

    render() {
        return (
            <View>
                <Header content='Authentication' />
            </View>
        )
    }
}

export default App
