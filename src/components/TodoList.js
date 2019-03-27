import React from 'react';
import { StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo, deleteTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo, dispatchDeleteTodo }) => (
    <View>
        {todos.map(todo => (
        <TodoListItem key={todo.id} 
        todo={todo}
        onPressTodo={() => dispatchToggleTodo(todo.id)}
        onLongPressTodo={() => dispatchSetEditingTodo(todo)}
        onPressDeleteTodo={() => dispatchDeleteTodo(todo.id) } />
        ))}
    </View>
)

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(mapStateToProps,
    { 
        dispatchToggleTodo: toggleTodo,
        dispatchSetEditingTodo: setEditingTodo,
        dispatchDeleteTodo: deleteTodo
     }
    )(TodoList);