import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

const firebaseConfig = require('../firebaseConfig')
import { Header, Button, Spinner, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = {
        loggedIn: null
    }

    componentWillMount() {
        firebase.initializeApp(firebaseConfig)

        firebase.auth().onAuthStateChanged(user => {
           user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false })
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button 
                            content='Log out'
                            onPress={() => firebase.auth().signOut()}
                        />
                    </CardSection>
                )
            case false: 
                return <LoginForm />
            default:
                return <Spinner size='large' />
        }
    }

    render() {
        return (
            <View>
                <Header content='Authentication' />
                {this.renderContent()}
            </View>
        )
    }
}

export default App
