import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Field = (props) => (
    <View style={styles.container} >
        <Text style={styles.label} >{props.label}</Text>
        <TextInput
            placeholder={props.placeholder}
            autoCorrect={false}
            secureTextEntry={props.secureTextEntry}
            style={styles.input}
            value={props.value}
            onChangeText={props.onChangeText}
        />
    </View>
)

const styles = {
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
}

export { Field }
