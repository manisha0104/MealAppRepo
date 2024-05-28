import React from "react";
import { View,Text,Touchable,StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const MealItems = props =>{

    return(
        <View style={styles.mealItems}>
        <TouchableOpacity onPress={props.onselectMeal}>
        <View style={styles.mealItems}>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                <View style={styles.titleContainer}>
                <Text style={styles.textStyle} numberOfLines={1}>{props.title}</Text>
                </View>
                </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    );
};

const styles= StyleSheet.create({
    mealItems:{
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginBottom:20,
    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },
    mealRow:{
        flexDirection:'row',

    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
    },
    textStyle:{
        fontFamily:'Mulish-BlackItalic',
        fontSize:20,
        
        textAlign:'center',
        color:'white'
    }
});

export default MealItems;