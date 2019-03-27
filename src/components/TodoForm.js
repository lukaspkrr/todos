import React from 'react';
import { View, StyleSheet, Button, Keyboard } from 'react-native';
import Input from './Input';
import { connect } from 'react-redux';

import { saveTodo, updateTodo, setTodoText } from '../actions';

class TodoForm extends React.Component {

    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const { todo } = this.props;
        Keyboard.dismiss();
        todo.id ? this.props.dispatchUpdateTodo(todo) : this.props.dispatchSaveTodo(todo.text);
    }

    render() {
        const { text, id } = this.props.todo;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                    onChangeText={text => this.onChangeText(text)}
                    value={text} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                    title={id ? 'Edit' : 'Save'}
                    color='#6441a4'
                    onPress={() => this.onPress()} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 15,
        flexDirection: 'row',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#6441a4',
        borderRadius: 5,
        marginRight: 15,
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
});

const mapStateToProps = state => ({ todo: state.editingTodo });

export default connect(mapStateToProps, {
    dispatchSaveTodo: saveTodo,
    dispatchUpdateTodo: updateTodo,
    dispatchSetTodoText: setTodoText
})(TodoForm);
