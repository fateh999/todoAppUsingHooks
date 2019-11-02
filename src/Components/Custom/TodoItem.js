import React, { Fragment } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Theme from '../../Config/Theme';
import { Spacer } from '..';
import images from '../../Assets';

function TodoItem({ todo, index, setEditTodo, deleteTodo }) {
  const styles = StyleSheet.create({
    todoItemStyle: {
      flexDirection: 'row',
      minHeight: 70,
      backgroundColor: Theme.primary,
      padding: 15
    },
    todoStyle: { flex: 8, justifyContent: 'center' },
    todoOptionsStyle: { flex: 2.5, flexDirection: 'row', alignItems: 'center' },
    buttonViewStyle: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

  function deleteFunction() {
    deleteTodo(index);
  }

  function editFunction() {
    setEditTodo(index);
  }

  return (
    <Fragment>
      <View style={styles.todoItemStyle}>
        <View style={styles.todoStyle}>
          <Text style={{ color: Theme.white, fontSize: 20, margin: 0 }}>
            {todo}
          </Text>
        </View>
        <View style={styles.todoOptionsStyle}>
          <TouchableOpacity onPress={editFunction}>
            <View style={styles.buttonViewStyle}>
              <Image resizeMode={'contain'} source={images.edit}></Image>
            </View>
          </TouchableOpacity>
          <Spacer horizontal size={5} />
          <TouchableOpacity onPress={deleteFunction}>
            <View style={styles.buttonViewStyle}>
              <Image resizeMode={'contain'} source={images.delete}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Spacer size={5} />
    </Fragment>
  );
}

export default TodoItem;
