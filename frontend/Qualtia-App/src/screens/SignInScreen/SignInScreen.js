import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from '../../../assets/images/qualtia_logo.png'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onsSignInPress = () => {
        // validate User
        navigation.navigate('Home');
    }

    const onCreateAccountPress = () => {
        navigation.navigate('SignUp');
    }
    
  return (
    <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
        <CustomInput placeholder={'Usuario'} value={user} setValue={setUser} />
        <CustomInput placeholder={'Contraseña'} value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomButton text={'Ingresar'} onPress={onsSignInPress}/>
        <CustomButton text={'No tienes cuenta? Crea una aqui'} onPress={onCreateAccountPress} type='tertiary'/>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
    },

    logo: {
        maxHeight: 200,
        width: '70%',
        maxWidth: 300,
    },
  });
  
export default SignInScreen;
