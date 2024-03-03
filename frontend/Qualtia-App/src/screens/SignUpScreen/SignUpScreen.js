import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const SignUpScreen = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onSignUpPress = () => {
    navigation.navigate('Home');
  }

  const onAlreadyHaveAccountPress = () => {
    navigation.navigate('SignIn');
  }
 
  return (
    <View style={styles.root}>
      <Text style={styles.title} >Crea tu cuenta Aquí!</Text>
      <CustomInput placeholder={'Nombre(s)'} value={name} setValue={setName} />
      <CustomInput placeholder={'Apellidos'} value={lastName} setValue={setLastName} />
      <CustomInput placeholder={'Nombre de Usuario'} value={user} setValue={setUser} />
      <CustomInput placeholder={'Correo Electrónico'} value={mail} setValue={setMail} />
      <CustomInput placeholder={'Contraseña'} value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomInput placeholder={'Repite tu contraseña'} value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
      
      <CustomButton text={'Crear Cuenta'} onPress={onSignUpPress} />

      <Text style={styles.text}>Al registrarte, aceptas nuestros <Text style={styles.link}>Terminos y condiciones</Text>.</Text>

      <CustomButton text={'¿Ya tienes una cuenta? Ingresa Aquí!'} type={'tertiary'} onPress={onAlreadyHaveAccountPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    alignItems: 'center',
    padding: 20,
    paddingTop:70,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f2a32f',
    margin: 10,
  },
  text: {
    color: 'gray',
    margin: 10,
  },
  link: {
    color: '#f2a32f',
  }
})
export default SignUpScreen;