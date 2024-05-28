import React, { useEffect } from "react";
import { View,Text,StyleSheet, Button, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { Categorys } from "../Data/Dummy-data";
import Colors from "../Constaints/Colors";
import CategoryGridTile from "../Components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";
import images from "../Constaints/images";

const CategoryScreen =props=>{
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    })
    const renderGridItem=(itemdata)=>{
        return <CategoryGridTile 
        title={itemdata.item.title}
        color={itemdata.item.color}
         onselect={()=>props.navigation.navigate('CategoryMeals',{cat_id:itemdata.item.id})}
         />;
    }

    return(
        <View>
          
            <Header title="Meal Categories" 
                menu_icon={images.menu_icon}
                ontoggle={()=>props.navigation.toggleDrawer()} 
                navigation={props.navigation} />
           <FlatList numColumns={2}
           data={Categorys}
           renderItem={renderGridItem}/>
        </View>
    );
};


const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

   
});
export default CategoryScreen;