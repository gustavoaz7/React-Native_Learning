import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => (
    <View style={styles.container}>
        {props.children}
    </View>
)

const styles = {
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default CardSection
