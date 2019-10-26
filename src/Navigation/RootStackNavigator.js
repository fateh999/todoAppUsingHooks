import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/home/HomeScreen';
import LoginScreen from '../Screens/login/LoginScreen';
import SignupScreen from '../Screens/signup/SignupScreen';

const RootStackNavigator = createStackNavigator(
  {
    login: {
      screen: LoginScreen
    },
    signup: {
      screen: SignupScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'login'
  }
);

export default createAppContainer(RootStackNavigator);
