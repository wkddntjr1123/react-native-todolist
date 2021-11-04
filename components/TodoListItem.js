import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({id, textValue, checked, removeTodo, toggleTodo}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => toggleTodo(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={28} color="#4B4CFF" />
          </View>
        ) : (
          <View style={styles.circle}></View>
        )}
      </TouchableOpacity>
      <Text style={checked ? styles.completeTitle : styles.title}>
        {textValue}
      </Text>
      <TouchableOpacity onPress={() => removeTodo(id)}>
        <Text>
          <Icon name="delete" size={26} color="red" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 3,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    flex: 1,
    fontSize: 14,
    color: '#2e2e2e',
  },
  circle: {
    width: 28,
    height: 28,
    borderColor: '#4B4CFF',
    borderWidth: 2,
    borderRadius: 50,
    marginRight: 10,
  },
  completeCircle: {
    marginRight: 10,
  },
  completeTitle: {
    flex: 1,
    fontSize: 14,
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
});
export default TodoListItem;
