import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/home/HomeScreen';

const AuthStackNavigator = createStackNavigator(
  {
    home: {
      screen: HomeScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'home'
  }
);

export default createAppContainer(AuthStackNavigator);
