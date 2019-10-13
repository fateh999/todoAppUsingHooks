import React from 'react';
import useHomeScreen from './useHomeScreen';
import {Container, Body, Input, Spacer, TodoItem} from '../../Components';
import {View, TouchableOpacity, Image, StatusBar, Text} from 'react-native';
import images from '../../Assets';
import Theme from '../../Config/Theme';

function HomeScreen() {
  const {styles, todos, setTodo, addTodo, todo, deleteTodo} = useHomeScreen();

  function renderTodos({text}, index) {
    return (
      <TodoItem todo={text} index={index} key={index} deleteTodo={deleteTodo} />
    );
  }

  return (
    <Container style={styles.containerStyle}>
      <StatusBar backgroundColor={Theme.primary} />
      <Body style={styles.bodyStyle}>
        <View style={styles.rowStyle}>
          <View style={styles.inputViewStyle}>
            <Input value={todo} onChangeText={setTodo} />
          </View>
          <TouchableOpacity onPress={addTodo}>
            <View style={styles.buttonViewStyle}>
              <Image resizeMode={'contain'} source={images.add}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <Spacer size={20} />
        {todos.map(renderTodos)}
      </Body>
    </Container>
  );
}

export default HomeScreen;
