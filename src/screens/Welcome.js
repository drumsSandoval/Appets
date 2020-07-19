import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;
const Welcome = () => {
  const [msn, setMsn] = useState('Bienvenido');
  const showLogin = () => {
    setMsn('Iniciar Sesión');
  };
  const showSignUp = () => {
    setMsn('Crear Cuenta');
  };
  const showStartScreen = () => {
    setMsn('Bienvenido');
  };
  return (
    <>
      <SafeAreaView style={styles.gradient}>
        <Text style={styles.title}>Appets</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Picture1.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>{msn}</Text>
        {msn === 'Bienvenido' && (
          <MainContent showSignUp={showSignUp} showLogin={showLogin} />
        )}
        {msn === 'Iniciar Sesión' && <Login goBack={showStartScreen} />}
        {msn === 'Crear Cuenta' && <SignUp goBack={showStartScreen} />}
      </ScrollView>
    </>
  );
};

const MainContent = ({showLogin, showSignUp}) => {
  return (
    <View style={styles.infoContainer}>
      <View style={{padding: 10, marginVertical: 20}}>
        <Text style={styles.infoText}>
          La mejor App para Mascotas,{'\n'}Vive la Experiencia
        </Text>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <Button
            text="Iniciar Sesion"
            style={styles.button}
            textStyle={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textShadowColor: 'rgba(0,0,0, .75)',
              textShadowOffset: {
                width: 1,
                height: 1,
              },
              textShadowRadius: 0,
            }}
            onPress={showLogin}
          />

          <Button
            text="Registrate"
            style={[styles.button, {backgroundColor: '#7a7a7e'}]}
            textStyle={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textShadowColor: 'rgba(0,0,0, .75)',
              textShadowOffset: {
                width: 1,
                height: 1,
              },
              textShadowRadius: 0,
            }}
            onPress={showSignUp}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    width: widthScreen,
    height: heightScreen / 2,
    backgroundColor: '#5cc3db',
    borderRadius: 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    bottom: 0,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    textShadowRadius: 0,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(92,195,219, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
  buttonContainer: {
    marginHorizontal: '2.5%',
    marginVertical: 20,
    padding: 5,
    bottom: -50,
  },
  button: {
    backgroundColor: '#5cc3db',
    borderRadius: 20,
    marginBottom: 15,
  },
});
export default Welcome;
