import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import RootStackNavigator from './RootStackNavigator';
import LoadingScreen from '../Screens/loading/LoadingScreen';

const AppSwitchNavigator = createSwitchNavigator(
  {
    auth: {
      screen: AuthStackNavigator
    },
    root: {
      screen: RootStackNavigator
    },
    loading: {
      screen: LoadingScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'loading'
  }
);

export default createAppContainer(AppSwitchNavigator);
