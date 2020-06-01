import 'react-native-gesture-handler';
import React from 'react';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import Welcome from './src/screens/Welcome';
const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="welcome" component={Welcome} initial hideNavBar />
      </Stack>
    </Router>
  );
};

export default App;
