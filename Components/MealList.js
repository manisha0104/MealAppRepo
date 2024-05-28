import React from "react";
import { View,Text,StyleSheet, StatusBar, FlatList} from 'react-native';
import Header from "../Components/Header";
import MealItems from "./MealItems";
import images from "../Constaints/images";
import { useNavigation } from "@react-navigation/native";

const MealList =props =>{
    const navigation=useNavigation();
    const renderMealItem= itemdata=>{
        return(
           <MealItems 
            onselectMeal ={()=>{props.navigation.navigate('MealDetails',{mealId:itemdata.item.id})}}
           title={itemdata.item.title}
           image={itemdata.item.imageurl}
           duration={itemdata.item.duration} 
           complexity={itemdata.item.complexity} 
           affordability={itemdata.item.affordability} 
           />
        );
    };
    return(
        <View style={styles.list}>
            <Header title={props.title}  ontoggle={()=>{navigation.toggleDrawer()}} navigation={props.navigation} />
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={props.listData} 
                renderItem={renderMealItem}
            style={{width:'90%',margin:10}}/>
        </View>
    );
};
const styles= StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default MealList;