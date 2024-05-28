import React, { useEffect } from "react";
import {useSelector} from 'react-redux';
import { StyleSheet } from "react-native";
import { Categorys } from "../Data/Dummy-data";

import { useNavigation } from "@react-navigation/native";
import MealList from "../Components/MealList";

const CategoryMeals =props=>{
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    })
  
    const catId = props.route.params.cat_id;

    const availableMeals= useSelector(state => state.meals.filteredMeals);

    const selectedCategory =Categorys.find(cat=>cat.id===catId)

    const displayedMeals= availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0);


    console.log('catId',catId)
    
    return(
        <MealList title={selectedCategory.title} listData={displayedMeals} navigation={props.navigation}/>
    );
};
const styles= StyleSheet.create({
    
});
export default CategoryMeals;