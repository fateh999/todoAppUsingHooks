import { useState, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Theme from '../../Config/Theme';
import FirebaseHandler from '../../Utilities/FirebaseHandler';

function useLoginScreen({ navigation }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const updateUser = useCallback(
    (keyName, value) => {
      const tempUser = { ...user, [keyName]: value };
      setUser(tempUser);
    },
    [user]
  );

  const loginHandle = useCallback(async () => {
    try {
      const responseData = await FirebaseHandler.getInstance()
        .auth()
        .signInWithEmailAndPassword(user.email, user.password);
      console.log('Response data', responseData);
    } catch (error) {
      console.log('Error', error);
    }
  }, [user.email, user.password]);

  const goToSignup = useCallback(() => {
    navigation.navigate('signup');
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
        },
        linkStyle: {
          color: Theme.primary,
          fontSize: 18,
          textAlign: 'center'
        }
      }),
    []
  );

  return {
    user,
    updateUser,
    styles,
    loginHandle,
    goToSignup
  };
}

export default useLoginScreen;
