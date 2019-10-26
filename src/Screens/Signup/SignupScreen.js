import React from 'react';
import useSignupScreen from './useSignupScreen';
import { Container, Body, Input, Spacer } from '../../Components';
import { Text, TouchableOpacity, View } from 'react-native';

function SignupScreen(props) {
  const { user, updateUser, styles, signupHandle } = useSignupScreen(props);

  return (
    <Container style={styles.containerStyle}>
      <Body style={styles.bodyStyle}>
        <Spacer size={50} />
        <Text style={styles.headingStyle}>TODO APP</Text>
        <Spacer size={50} />
        <Input
          value={user.name}
          onChangeText={text => updateUser('name', text)}
          textInputProps={{
            placeholder: 'Name'
          }}
        />
        <Spacer size={20} />
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
          value={user.password}
          onChangeText={text => updateUser('password', text)}
          textInputProps={{
            secureTextEntry: true,
            placeholder: 'Password'
          }}
        />
        <Spacer size={20} />
        <Input
          value={user.cnfPassword}
          onChangeText={text => updateUser('cnfPassword', text)}
          textInputProps={{
            secureTextEntry: true,
            placeholder: 'Confirm Password'
          }}
        />
        <Spacer size={50} />
        <TouchableOpacity onPress={signupHandle}>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Signup</Text>
          </View>
        </TouchableOpacity>
      </Body>
    </Container>
  );
}

export default SignupScreen;
