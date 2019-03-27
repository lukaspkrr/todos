import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class TodoListItem extends React.Component {

        deleteTodo(onPressDeleteTodo) {
            Alert.alert(
                'Are you sure?',
                'Are you sure you want to delete this todo?',
                [
                { text: 'Cancel', style: 'cancel' },
                {text: 'OK', onPress: onPressDeleteTodo},
                ],
                {cancelable: false},
            );
        }
        render (props) {
            const { todo, onPressTodo, onLongPressTodo, onPressDeleteTodo } = this.props;
            return (
                <TouchableOpacity 
                onPress={onPressTodo}
                onLongPress={onLongPressTodo}>
                    <View style={styles.line}>
                    <Text style={[
                        styles.lineText,
                        todo.done ? styles.doneTodo : null
                        ]}>
                        {todo.text}
                    </Text>
                    <TouchableOpacity
                    onPress={() => this.deleteTodo(onPressDeleteTodo)}>
                        <Ionicons name="md-trash" size={32} color='#6441a4' />
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            )
        }
    

}

const styles = StyleSheet.create({
    line: {
        padding: 5,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 2,
        marginBottom: 2,
        minHeight: 65,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#bbb',
        backgroundColor: '#b19dd8',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 5
    },
    doneTodo: {
        textDecorationLine: 'line-through',
    }
});

export default TodoListItem;