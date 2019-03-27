import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


const Input = ({onChangeText, value}) => {
    return (
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        selectionColor={'#6441a4'} />
    )
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingRight: 15,
    }
})

export default Input;