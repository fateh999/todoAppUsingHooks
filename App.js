import React, { useEffect } from 'react';
import RootStackNavigator from './src/Navigation/RootStackNavigator';
import FirebaseHandler from './src/Utilities/FirebaseHandler';

function App() {
  useEffect(() => {
    FirebaseHandler.init();
  }, []);

  return <RootStackNavigator />;
}

export default App;
