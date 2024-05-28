import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealList from "../Components/MealList";

const Favourites =props=>{
    // console.log('state',state)
    const favMeals= useSelector(state => state.meals.favouriteMeals);
    console.log('favMeals',favMeals)
    // const favMeals = availableMeals.filter(meal=> meal.id=== 'm1' || meal.id === 'm2')
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    })
    return(
        <MealList title={'Favourites'} 
        listData={favMeals} navigation={props.navigation}/>
    );
};
const styles= StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    }
});
export default Favourites;