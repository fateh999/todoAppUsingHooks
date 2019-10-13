import {StyleSheet} from 'react-native';
import Theme from '../../Config/Theme';
import {useState} from 'react';

function useHomeScreen() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  function addTodo() {
    if (!todo.trim()) {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo('');
  }

  function deleteTodo(index) {
    const tempTodos = [...todos];
    tempTodos.splice(index, 1);
    setTodos([...tempTodos]);
  }

  const styles = StyleSheet.create({
    bodyStyle: {
      padding: 15,
    },
    containerStyle: {
      backgroundColor: Theme.dark,
    },
    rowStyle: {
      flexDirection: 'row',
    },
    inputViewStyle: {
      flex: 8,
    },
    buttonViewStyle: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 5,
    },
  });

  return {
    styles,
    todos,
    setTodo,
    addTodo,
    todo,
    deleteTodo,
  };
}

export default useHomeScreen;
