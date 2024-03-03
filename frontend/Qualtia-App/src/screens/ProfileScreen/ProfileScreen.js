import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Header from "../../components/Header";
import profilePic from "../../../assets/images/pfp.png";
import CustomButton from "../../components/customButton/CustomButton";
import CustomInput from "../../components/customInput";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const ProfileScreen = () => {
  const [Mail, setMail] = useState("");
  const [Phone, setPhone] = useState("");

  const navigation = useNavigation();

  const onSignOutPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Header leftIcon="arrow-left" />
      <Text style={styles.title}>MI PERFIL</Text>
      <Image source={profilePic} style={styles.image} />
      <Text style={styles.title}>Wini</Text>
      <Text style={styles.info}>Información de usuario</Text>
      <Text style={styles.subHeader}>Email</Text>
      <CustomInput
        placeholder={"Usuario"}
        value={Mail}
        setValue={setMail}
        style={styles.inputMargin}
      />
      <Text style={styles.subHeader}>Teléfono</Text>
      <CustomInput
        placeholder={"Teléfono"}
        value={Phone}
        setValue={setPhone}
        style={styles.inputMargin}
      />
      <CustomButton
        text={"Membresía"}
        type="secondary"
        style={styles.buttonMargin}
      />
      <CustomButton text={"Ajustes"} type="secondary" style={styles.buttonMargin} />
      <CustomButton
        text={"Cerrar Sesión"}
        type="primary"
        style={styles.buttonMargin}
        onPress={onSignOutPress}
      />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFC369",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#273996",
    fontWeight: "800",
    paddingTop: 20,
  },
  image: {
    width: 170,
    height: 170,
    marginTop: 5,
  },
  info: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "400",
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "inherit",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    overflow: "hidden",
  },
  subHeader: {
    fontSize: 20,
    color: "#000000",
    paddingTop: 20,
    alignSelf: "flex-start",
    paddingLeft: 30,
  },
  inputMargin: {
    marginBottom: 10,
  },
  buttonMargin: {
    marginVertical: 10,
  },
});
