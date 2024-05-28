import React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';

import images from '../Constaints/images';

const Header =  props => {
  

  return (
    <View style={styles.header}>
      {/* <TouchableOpacity onPress={() =>{props.navigation.toggleDrawer()}}> */}
      <TouchableOpacity onPress={props.ontoggle}>
      <Image  source={props.menu_icon} 
              style={{height:30,
                      width:30,
                    }}>
      </Image>
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={props.onclick}>
      <Image  source={props.favIcon} 
              style={{height:40,
                      width:40,

              }}>
      </Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#f7287b',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection:'row',
    paddingHorizontal:10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    width:'70%',
    textAlign:'left'
  },
});

export default Header;
