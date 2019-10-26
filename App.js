import React, { useEffect, Fragment, useCallback } from 'react';
import FirebaseHandler from './src/Utilities/FirebaseHandler';
import { StatusBar } from 'react-native';
import AppSwitchNavigator from './src/Navigation/AppSwitchNavigator';
import { NavigationService } from './src/Utilities';

function App() {
  useEffect(() => {
    FirebaseHandler.init();
    FirebaseHandler.getInstance()
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          console.log('Logged In');
          NavigationService.navigate('home');
        } else {
          console.log('Not Logged In');
          NavigationService.navigate('login');
        }
      });
  }, []);

  const createNavigationRef = useCallback(
    ref => NavigationService.setTopLevelNavigator(ref),
    []
  );

  return (
    <Fragment>
      <StatusBar barStyle={'light-content'} />
      <AppSwitchNavigator ref={createNavigationRef} />
    </Fragment>
  );
}

export default App;
