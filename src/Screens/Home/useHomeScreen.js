import Theme from '../../Config/Theme';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { DataStore, FirebaseHandler } from '../../Utilities';
import { StyleSheet } from 'react-native';

function useHomeScreen() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [updateIndex, setUpdateIndex] = useState(-1);

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const addTodo = useCallback(() => {
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
        text: todo
      };
      setTodos([...todos, newTodo]);
      setTodo('');
    }
    setUpdateIndex(-1);
  }, [todo, todos]);

  const deleteTodo = useCallback(
    index => {
      const tempTodos = [...todos];
      tempTodos.splice(index, 1);
      setTodos([...tempTodos]);
      setTodo('');
      setUpdateIndex(-1);
    },
    [todos]
  );

  const setEditTodo = useCallback(
    index => {
      const tempTodo = todos[index];
      setTodo(tempTodo.text);
      setUpdateIndex(index);
    },
    [todos]
  );

  const cancelEditTodo = useCallback(() => {
    setUpdateIndex(-1);
    setTodo('');
  }, []);

  const saveTodos = useCallback(() => {
    DataStore.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const fetchTodos = useCallback(async () => {
    const todosString = await DataStore.getItem('todos');
    if (todosString) {
      setTodos(JSON.parse(todosString));
    }
  }, []);

  const logoutHandle = useCallback(() => {
    FirebaseHandler.getInstance()
      .auth()
      .signOut();
  }, []);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        bodyStyle: {
          padding: 25
        },
        containerStyle: {
          backgroundColor: Theme.dark,
          paddingVertical: 15
        },
        rowStyle: {
          flexDirection: 'row'
        },
        inputViewStyle: {
          flex: 3.5
        },
        inputViewStyleExpanded: {
          flex: 8
        },
        buttonViewStyle: {
          flex: 1,
          justifyContent: 'center'
        },
        cancelEditStyle: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center'
        },
        buttonStyle: {
          backgroundColor: Theme.primary,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center'
        },
        buttonTextStyle: {
          color: Theme.white,
          fontSize: 24
        },
        logoutStyle: {
          paddingHorizontal: 50
        }
      }),
    []
  );

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
    logoutHandle
  };
}

export default useHomeScreen;
