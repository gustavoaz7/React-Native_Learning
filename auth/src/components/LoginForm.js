import React, { Component } from 'react'

import { Button, Card, CardSection, Field } from './common'

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
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

                <CardSection>
                    <Button content='Log in' />
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm
