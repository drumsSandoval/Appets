import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from './Button';
import Input from './Input';
import {Actions} from 'react-native-router-flux';
const Login = ({goBack}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.goBack}>{'<- Regresar'}</Text>
      </TouchableOpacity>
      <View style={styles.inpuContainer}>
        <Text style={styles.label}>Correo Electronico</Text>
        <Input placeholder="example@example.com" />
      </View>
      <View style={styles.inpuContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <Input placeholder="*******" />
      </View>
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
          onPress={() => Actions.tabs()}
        />
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginHorizontal: 22,
    fontWeight: '500',
    textShadowColor: 'rgba(92,195,219, .75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
  inpuContainer: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginHorizontal: '2.5%',
  },
  button: {
    backgroundColor: '#5cc3db',
    borderRadius: 20,
    marginBottom: 15,
  },
  goBack: {
    fontSize: 18,
    padding: 10,
    color: 'gray',
    margin: 10,
    top: -20,
  },
  footer: {
    height: 300,
  },
});
export default Login;
