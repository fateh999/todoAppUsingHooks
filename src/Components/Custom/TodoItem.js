import React, {Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Theme from '../../Config/Theme';
import {Spacer} from '..';

function TodoItem({todo}) {
  const styles = StyleSheet.create({
    todoItemStyle: {
      flexDirection: 'row',
      minHeight: 70,
      backgroundColor: Theme.primary,
      padding: 15,
    },
    todoStyle: {flex: 8, justifyContent: 'center'},
    todoOptionsStyle: {flex: 2},
  });

  return (
    <Fragment>
      <View style={styles.todoItemStyle}>
        <View style={styles.todoStyle}>
          <Text style={{color: Theme.white, fontSize: 20, margin: 0}}>
            {todo}
          </Text>
        </View>
        <View style={styles.todoOptionsStyle}></View>
      </View>
      <Spacer size={5} />
    </Fragment>
  );
}

export default TodoItem;
