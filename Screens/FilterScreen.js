import { useNavigation } from "@react-navigation/native";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import images from "../Constaints/images";
import { Switch } from "react-native-gesture-handler";
import Colors from "../Constaints/Colors";
const FilterScreen =props=>{
    const navigation=useNavigation();
   
    const [isGlutonFree, setIsGlutonFree] =useState(false);
    const [isLactouseFree, setIsLactouseFree] =useState(false);
    const [isVegen, setIsVegen] =useState(false);
    const [isVegetarian, setIsVegetarian] =useState(false);

    const changeStatus=(newvalue)=>{
        if(newvalue==true){
            newvalue=true    
        }else{
            newvalue=false  
        }
        //setIsGlutonFree(newvalue)
        return newvalue
    }
    const FilterSwitch=props=>{
        return(
        <View style={styles.filterContainer}>
                <Text style={{}}>{props.label}</Text>
                <Switch 
                    trackColor={{true:'black'}}
                    thumbColor={Colors.pink}
                    value={props.state} 
                    onValueChange={props.onchange}
                    />
 
            </View>
        );
    };
    const SaveFilters = useCallback(()=>{
        const appliedFilters={
            glutonFree:isGlutonFree,
            lactouseFree:isLactouseFree,
            vegen:isVegen,
            vegetarian:isVegetarian
        }
    },[isGlutonFree,isLactouseFree,isVegen,isVegetarian])
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })

        navigation.setParams({save:SaveFilters});
    },[SaveFilters]) 
    return(
        <View style={styles.screen} >
            <Header title={'Filter'} menu_icon={images.menu_icon}/>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label='Gluton free'
                state={isGlutonFree}
                onchange={newvalue=> setIsGlutonFree(changeStatus(newvalue))}
                />
            <FilterSwitch label='Lactose-free'
                state={isLactouseFree}
                onchange={newvalue=>setIsLactouseFree(changeStatus(newvalue))}
                />
            <FilterSwitch label='Vegen'
                state={isVegen}
                onchange={newvalue=>setIsVegen(changeStatus(newvalue))}
                />
            <FilterSwitch label='Vagetarian'
                state={isVegetarian}
                // onchange={newvalue=>setIsVegetarian(changeStatus(newvalue))}
                />
            <TouchableOpacity onPress={()=>navigation.getparam('save')}
            style={{borderWidth:1,borderRadius:10,borderColor:Colors.primaryColor,padding:10,width:100,alignItems:'center'}}>
            <Text style={{color:Colors.pink,fontSize:20, fontFamily:'Mulish-Bold'}}>Save</Text>
            </TouchableOpacity>

        </View>
    );
};
const styles= StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
    },
    title:{
        fontFamily:'Mulish-Bold',
        fontSize:20,
        textAlign:'center',
        color:'black',
        margin:20
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:15

    },
});
export default FilterScreen;