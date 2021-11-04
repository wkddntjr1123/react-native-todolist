import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import SQLite from 'react-native-sqlite-storage';

const App = () => {
  const [db] = useState(db);
  const [todos, setTodos] = useState([]);
  // todo추가
  useEffect(async () => {
    const db = SQLite.openDatabase(
      {
        name: 'testDB.db',
        location: 'default',
        createFromLocation: '~testDB.db',
      },
      () => {
        console.log('ok');
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM todo;')?.then(res => {
            // const results = res;
            console.log(res);
          });
        });
      },
      err => {
        console.log('Error :' + err);
      },
    );
  }, [db]);
  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };
  // todo삭제
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  // todo토글
  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={styles.appTitle}>Hello Todo List</Text>
      <View style={styles.card}>
        <TodoInsert addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3143E8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 30,
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 10,
    width: '85%',
    height: '80%',
  },
});
export default App;
