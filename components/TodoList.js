import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, removeTodo, toggleTodo}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
