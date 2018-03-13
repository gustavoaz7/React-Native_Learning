import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

import { Card, CardSection, Field, Button, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    renderButton() {
        return this.props.loading ? (
            <Spinner size='large' />
        ) : (
            <Button 
                content='Login'
                onPress={this.onButtonPress.bind(this)}
            />
        )
    }

    renderError() {
        if (this.props.error) return (
            <View style={{ backgroundColor: 'white' }}>
                <Text style={styles.error}>
                    {this.props.error}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Field
                        label='Email'
                        placeholder='user@mail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Field
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
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

const mapStateToProps = ({ auth }) => {
    const { email, password, loading, error } = auth
    return { email, password, loading, error }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
