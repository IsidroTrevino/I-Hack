import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from '../../../assets/images/qualtia_logo.png'
import { useState } from "react";

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const onsSignInPress = () => {
        console.log('Usuario:', user);
    }

    const onForgotPasswordPress = () => {
        console.log('Olvidaste tu contraseña?');
    }
    
  return (
    <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
        <CustomInput placeholder={'Usuario'} value={user} setValue={setUser} />
        <CustomInput placeholder={'Contraseña'} value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomButton text={'Ingresar'} onPress={onsSignInPress}/>
        <CustomButton text={'Olvidaste tu contraseña?'} onPress={onForgotPasswordPress} type='tertiary'/>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },

    logo: {
        maxHeight: 200,
        width: '70%',
        maxWidth: 300,
    },
  });
  
export default SignInScreen;
