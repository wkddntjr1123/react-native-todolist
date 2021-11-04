import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Alert,
} from 'react-native';

const TodoInsert = ({addTodo}) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const onInputChange = text => {
    setNewTodoTitle(text);
  };
  const addTodoHandler = () => {
    if (!newTodoTitle) {
      Alert.alert(
        '뀨?',
        '내용을 입력해주세요.',
        [
          {
            text: '확인',
            onPress: () => {
              console.log('12121212!');
            },
          },
        ],
        {cancelable: false},
      );
      return;
    }
    addTodo(newTodoTitle);
    setNewTodoTitle('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="오늘의 할 일"
        onChangeText={onInputChange}
        value={newTodoTitle}
      />
      <TouchableOpacity style={styles.button} onPress={addTodoHandler}>
        <Text style={styles.buttonText}>추가</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  input: {
    flex: 1,
    padding: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingLeft: 10,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  buttonText: {
    color: '#258DFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default TodoInsert;
