import React, { Component } from 'react'
import { Text } from 'react-native'

import { CardSection } from './common'

class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text style={styles.title} >
                    {this.props.library.title}
                </Text>
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
