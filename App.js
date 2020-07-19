import 'react-native-gesture-handler';
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import FirebaseProvider from './src/context/Firebase';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/tabs/Home';
import Lost from './src/screens/tabs/Lost';
import Profile from './src/screens/tabs/Profile';
const App = () => {
  return (
    <FirebaseProvider>
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="welcome" component={Welcome} initial />
          <Stack key="tabs" type="reset">
            <Tabs init hideNavBar>
              <Scene
                key="home"
                title="Inicio"
                component={Home}
                icon={homeIcon}
              />
              <Scene key="lost" title="Perdidos" component={Lost} />
              <Scene key="profile" title="Perfil" component={Profile} />
            </Tabs>
          </Stack>
        </Stack>
      </Router>
    </FirebaseProvider>
  );
};

const homeIcon = () => (
  <TouchableOpacity style={styles.iconContainer}>
    <Image
      style={styles.icon}
      resizeMode="contain"
      source={require('./src/assets/icons/pawprint.png')}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconContainer: {
    paddingTop: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
    tintColor: 'gray',
  },
});

export default App;
