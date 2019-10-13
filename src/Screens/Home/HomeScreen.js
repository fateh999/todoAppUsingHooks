import React from 'react';
import useHomeScreen from './useHomeScreen';
import {
  Container,
  Body,
  Input,
  Spacer,
  TodoItem,
  Visible,
} from '../../Components';
import {View, TouchableOpacity, Image, StatusBar, Text} from 'react-native';
import images from '../../Assets';
import Theme from '../../Config/Theme';

function HomeScreen() {
  const {
    styles,
    todos,
    setTodo,
    addTodo,
    todo,
    deleteTodo,
    setEditTodo,
    cancelEditTodo,
    updateIndex,
  } = useHomeScreen();

  function renderTodos({text}, index) {
    return (
      <TodoItem
        todo={text}
        index={index}
        key={index}
        deleteTodo={deleteTodo}
        setEditTodo={setEditTodo}
      />
    );
  }

  return (
    <Container style={styles.containerStyle}>
      <StatusBar backgroundColor={Theme.primary} />
      <Body style={styles.bodyStyle}>
        <View style={styles.rowStyle}>
          <View
            style={
              styles[
                updateIndex === -1 ? 'inputViewStyleExpanded' : 'inputViewStyle'
              ]
            }>
            <Input value={todo} onChangeText={setTodo} />
          </View>
          <Visible visible={updateIndex === -1}>
            <Spacer size={5} horizontal />
            <TouchableOpacity onPress={addTodo}>
              <View style={styles.buttonViewStyle}>
                <Image resizeMode={'contain'} source={images.add}></Image>
              </View>
            </TouchableOpacity>
          </Visible>
          <Visible visible={updateIndex !== -1}>
            <View style={styles.cancelEditStyle}>
              <TouchableOpacity onPress={cancelEditTodo}>
                <View style={styles.buttonViewStyle}>
                  <Image resizeMode={'contain'} source={images.close}></Image>
                </View>
              </TouchableOpacity>
              <Spacer size={5} horizontal />
              <TouchableOpacity onPress={addTodo}>
                <View style={styles.buttonViewStyle}>
                  <Image resizeMode={'contain'} source={images.edit}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </Visible>
        </View>
        <Spacer size={20} />
        {todos.map(renderTodos)}
      </Body>
    </Container>
  );
}

export default HomeScreen;
