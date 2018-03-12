import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

const firebaseConfig = require('../firebaseConfig')
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
    }

    render() {
        return (
            <View>
                <Header content='Authentication' />
                <LoginForm />
            </View>
        )
    }
}

export default App
