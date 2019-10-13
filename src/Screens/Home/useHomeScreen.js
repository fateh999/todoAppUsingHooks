import {StyleSheet} from 'react-native';
import Theme from '../../Config/Theme';
import {useState} from 'react';

function useHomeScreen() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [updateIndex, setUpdateIndex] = useState(-1);

  function addTodo() {
    if (!todo.trim()) {
      return;
    }
    if (updateIndex != -1) {
      const tempTodos = [...todos];
      tempTodos[updateIndex].text = todo;
      setTodos(tempTodos);
    } else {
      const newTodo = {
        id: Date.now(),
        text: todo,
      };
      setTodos([...todos, newTodo]);
      setTodo('');
    }
    setUpdateIndex(-1);
  }

  function deleteTodo(index) {
    const tempTodos = [...todos];
    tempTodos.splice(index, 1);
    setTodos([...tempTodos]);
    setUpdateIndex(-1);
  }

  function setEditTodo(index) {
    const tempTodo = todos[index];
    setTodo(tempTodo.text);
    setUpdateIndex(index);
  }

  function cancelEditTodo() {
    setUpdateIndex(-1);
    setTodo('');
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
      flex: 3.5,
    },
    inputViewStyleExpanded: {
      flex: 8,
    },
    buttonViewStyle: {
      flex: 1,
      justifyContent: 'center',
    },
    cancelEditStyle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return {
    styles,
    todos,
    setTodo,
    addTodo,
    todo,
    deleteTodo,
    setEditTodo,
    updateIndex,
    cancelEditTodo,
  };
}

export default useHomeScreen;
