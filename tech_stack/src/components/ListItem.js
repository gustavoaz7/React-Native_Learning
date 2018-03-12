import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'

import * as actions from '../actions'
import { CardSection } from './common'

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    renderDescription() {
        const { library, expanded } = this.props

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }} >{library.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { id, title } = this.props.library

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                    <View>
                    <CardSection>
                        <Text style={styles.title} >
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
}

// ownProps === this.props inside the component
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
