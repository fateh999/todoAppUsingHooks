import React, {Fragment} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Theme from '../../Config/Theme';
import {Spacer} from '..';
import images from '../../Assets';

function TodoItem({todo, deleteTodo}, index) {
  const styles = StyleSheet.create({
    todoItemStyle: {
      flexDirection: 'row',
      minHeight: 70,
      backgroundColor: Theme.primary,
      padding: 15,
    },
    todoStyle: {flex: 8, justifyContent: 'center'},
    todoOptionsStyle: {flex: 2},
    buttonViewStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  function deleteFunction() {
    deleteTodo(index);
  }

  return (
    <Fragment>
      <View style={styles.todoItemStyle}>
        <View style={styles.todoStyle}>
          <Text style={{color: Theme.white, fontSize: 20, margin: 0}}>
            {todo}
          </Text>
        </View>
        <View style={styles.todoOptionsStyle}>
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
