import { View, Text } from 'react-native'
import React from 'react'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProteinScreen from '../screens/ProteinScreen';
import ColdMeatScreen from '../screens/ColdMeatScreen';
import DairyScreen from '../screens/DairyScreen';
import FoodSolutionScreen from '../screens/FoodSolutionScreen';
import MenuScreen from '../screens/MenuScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Navigation = () => {

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Protein' component={ProteinScreen}/>
        <Stack.Screen name='ColdMeat' component={ColdMeatScreen}/>
        <Stack.Screen name='Dairy' component={DairyScreen}/>
        <Stack.Screen name='FoodSolutions' component={FoodSolutionScreen}/>
        <Stack.Screen name='Menu' component={MenuScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;