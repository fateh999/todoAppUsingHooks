import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Theme from '../../Config/Theme';

function useSignupScreen({ navigation }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cnfPassword: ''
  });

  const updateUser = (keyName, value) => {
    const tempUser = { ...user, [keyName]: value };
    setUser(tempUser);
  };

  const loginHandle = () => {
    navigation.navigate('home');
  };

  const styles = StyleSheet.create({
    bodyStyle: {
      padding: 15
    },
    containerStyle: {
      backgroundColor: Theme.dark,
      paddingVertical: 15
    },
    headingStyle: {
      fontSize: 40,
      textAlign: 'center',
      color: Theme.white
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
    }
  });

  return {
    user,
    updateUser,
    styles,
    loginHandle
  };
}

export default useSignupScreen;
