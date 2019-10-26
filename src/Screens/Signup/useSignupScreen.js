import { useState, useMemo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Theme from '../../Config/Theme';
import FirebaseHandler from '../../Utilities/FirebaseHandler';

function useSignupScreen({ navigation }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cnfPassword: ''
  });

  const updateUser = useCallback(
    (keyName, value) => {
      const tempUser = { ...user, [keyName]: value };
      setUser(tempUser);
    },
    [user]
  );

  const signupHandle = useCallback(async () => {
    try {
      const responseData = await FirebaseHandler.getInstance()
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      console.log('Response data', responseData);
    } catch (error) {
      console.log('Error', error);
    }
  }, [user.email, user.password]);

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
      }),
    []
  );

  return {
    user,
    updateUser,
    styles,
    signupHandle
  };
}

export default useSignupScreen;
