import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardSection, Field, Button } from './common'
import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
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
                <CardSection>
                    <Button content='Login' />
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password
})

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)
