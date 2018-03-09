import React from 'react'
import { Text, View } from 'react-native'


const Header = (props) => (
    <View style={styles.view} >
        <Text style={styles.text} >{props.content}</Text>
    </View>
)


const styles = {
    view: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        height: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        position: 'relative',
        elevation: 2
    },
    text: {
        fontSize: 22
    }
}

export default Header
