import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { CardSection } from './common'

class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text>{this.props.employee.name}</Text>
            </CardSection>
        )
    }
}

const styles = {
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem
