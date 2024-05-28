import React, { useCallback, useEffect } from "react";
import { View,Text,StyleSheet,ScrollView,Image} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import Header from "../Components/Header";
import { useNavigation } from "@react-navigation/native";
import images from '../Constaints/images';
import { toggleFavorite } from "../Store/actions/MealsAction";
const MealDetails =props=>{
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    })
    const mealId = props.route.params.mealId
  
    const availableMeals = useSelector(state=>state.meals.meals)

    const selectedMeals= availableMeals.find(meal=>meal.id==mealId)

    const dispatch =useDispatch();

    const toggleFavHandeler= useCallback( ()=>{
        dispatch(toggleFavorite(mealId));
    
    },[dispatch,mealId] );
 
    return(
        <View style={styles.screen}>
            <Header title={selectedMeals.title} 
             favIcon={images.favImg}
             onclick={toggleFavHandeler}
             />
            <ScrollView>
            <Image source={{uri:selectedMeals.imageurl}} style={styles.imgStyle}/>
            <View style={styles.details}>
                <Text>{selectedMeals.duration}m</Text>
                <Text>{selectedMeals.complexity.toUpperCase()}</Text>
                <Text>{selectedMeals.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeals.ingredients.map( ingredients=>
                <Text  style={styles.textStyle}>{ingredients}</Text>
            )}
            <Text style={styles.title}>steps</Text>
            {selectedMeals.steps.map( steps=>
                <Text style={styles.textStyle}>{steps}</Text>
            )}
        </ScrollView>
        </View>
    );
};
const styles= StyleSheet.create({
    screen:{
        flex:1,
       
    },
    imgStyle:{
        width:'100%',
        height:200,
        backgroundColor:'red'
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between',
    },
    title:{
        fontFamily:'Mulish-Bold',
        fontSize:20,
        textAlign:'center',
        color:'black'

    },
    textStyle:{
        paddingHorizontal:20,
        color:'black',
        fontFamily:'Mulish-SemiBold',
        borderWidth:1,
        borderColor:'Black',
        padding:10,
        width:'90%',
        alignSelf:'center',
        margin:10
    }

   
});
export default MealDetails;