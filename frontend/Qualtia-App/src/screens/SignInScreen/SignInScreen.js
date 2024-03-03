import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions, FlatList } from "react-native";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton/CustomButton";
import Logo from '../../../assets/images/qualtia_logo.png'
import Mascota from '../../../assets/images/Mascota.png';
import { useNavigation } from "@react-navigation/native";
import WBlack from '../../../assets/images/WBlack.png'
import Kir from '../../../assets/images/kir.png'
import Alpino from '../../../assets/images/Alpino.png'
import Angus from '../../../assets/images/Angus.png'
import Caperucita from '../../../assets/images/Caperucita.png'
import Johnsonville from '../../../assets/images/Johnsonville.png'
import Duby from '../../../assets/images/Duby.png'
import Zwan from '../../../assets/images/Zwan.png'
import TiaVicky from '../../../assets/images/TiaVicky.png'
import Mishima from '../../../assets/images/Mishima.png'
import Peperami from '../../../assets/images/Peperami.png'
import Sargento from '../../../assets/images/sargento.png'
import { useState } from "react";

const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPress = () => {
        navigation.navigate('Home');
    }

    const onCreateAccountPress = () => {
        navigation.navigate('SignUp');
    }

    const data = [
        WBlack, Kir, Alpino, Angus,
        Caperucita, Johnsonville, Duby, Zwan,
        TiaVicky, Mishima, Peperami, Sargento
    ];

    const renderItem = ({ item }) => (
        <Image source={item} style={styles.logoItem} resizeMode="contain" />
    );

    return (
        <View style={styles.root}>
            <Image source={Mascota} style={styles.Mascota} />
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            <CustomInput placeholder={'Usuario'} value={user} setValue={setUser} />
            <CustomInput placeholder={'Contraseña'} value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomButton text={'Ingresar'} onPress={onSignInPress} />
            <CustomButton text={'¿No tienes cuenta? Crea una aquí'} onPress={onCreateAccountPress} type='tertiary' />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                style={styles.logoContainer}
            />
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
        marginTop: 60,
    },
    Mascota: {
        maxHeight: 200,
        width: 200,
        maxWidth: 300,
        resizeMode: 'contain',
        position: 'absolute',
        alignContent: 'center',
        top: 10,
        left: 150,
    },
    logoContainer: {
        marginTop: 10,
        width: '100%',
    },
    logoItem: {
        flex: 1,
        aspectRatio: 1,
        margin: 5,
    },
});

export default SignInScreen;
