import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import LoginScreen from '../Screens/Login/LoginScreen';

const RootStackNavigator = createStackNavigator(
  {
    home: {
      screen: HomeScreen
    },
    login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'login'
  }
);

export default createAppContainer(RootStackNavigator);
