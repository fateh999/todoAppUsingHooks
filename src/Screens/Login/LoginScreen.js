import React from 'react';
import useLoginScreen from './useLoginScreen';
import { Container, Body, Input, Spacer } from '../../Components';
import { Text, TouchableOpacity, View } from 'react-native';

function LoginScreen(props) {
  const { user, updateUser, styles, loginHandle } = useLoginScreen(props);

  return (
    <Container style={styles.containerStyle}>
      <Body style={styles.bodyStyle}>
        <Spacer size={50} />
        <Text style={styles.headingStyle}>TODO APP</Text>
        <Spacer size={50} />
        <Input
          value={user.email}
          onChangeText={text => updateUser('email', text)}
          textInputProps={{
            keyboardType: 'email-address',
            placeholder: 'Email'
          }}
        />
        <Spacer size={20} />
        <Input
          value={user.email}
          onChangeText={text => updateUser('password', text)}
          textInputProps={{
            secureTextEntry: true,
            placeholder: 'Password'
          }}
        />
        <Spacer size={50} />
        <TouchableOpacity onPress={loginHandle}>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </View>
        </TouchableOpacity>
      </Body>
    </Container>
  );
}

export default LoginScreen;
