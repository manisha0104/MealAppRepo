import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from '../Screens/CategoryScreen';
import CategoryMeals from '../Screens/CategoryMeals';
const stack=createNativeStackNavigator();
export default function MealsNavigator(){
// const App=() =>{
  return (
    <NavigationContainer>
<stack.Navigator initialRouteName='CategoryScreen'>
<stack.Screen name='CategoryScreen' component={CategoryScreen}/>
<stack.Screen name='CategoryMeals' component={CategoryMeals}/>
</stack.Navigator>
    </NavigationContainer>
  )
};

