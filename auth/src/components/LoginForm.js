import React, { Component } from 'react'
import firebase from 'firebase'
import { Text } from 'react-native'

import { Button, Card, CardSection, Field, Spinner } from './common'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const { email, password } = this.state
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false
        })
    }

    onLoginFail() {
        this.setState({ 
            error: 'Authentication Failed.',
            loading: false        
        })
    }

    renderButton() {
        if (this.state.loading) return <Spinner size='small' />
        return (
            <Button 
                content='Log in'
                onPress={this.onButtonPress.bind(this)}
            />
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Field
                        label='Email'
                        placeholder='user@mail.com'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <Field
                        label='Password'
                        placeholder='password'
                        secureTextEntry  // pass in as true
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                </CardSection>
                <Text style={styles.error} >
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    error: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm
