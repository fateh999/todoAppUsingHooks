import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/Home/HomeScreen';
import { createAppContainer } from 'react-navigation';

const RootStackNavigator = createStackNavigator(
  {
    home: {
      screen: HomeScreen
    }
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(RootStackNavigator);
