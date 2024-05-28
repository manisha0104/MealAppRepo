import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import CategoryScreen from './Screens/CategoryScreen';
import CategoryMeals from './Screens/CategoryMeals';
import MealDetails from './Screens/MealDetails';
import FilterScreen from './Screens/FilterScreen';
import Favourites from './Screens/Favourites';
import { StyleSheet } from 'react-native';
import Colors from './Constaints/Colors';

import MealsReducer from './Store/reducers/Meals';

const rootReducer = combineReducers({
  meals: MealsReducer,
  // Add other reducers here
  // other: otherReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMeals} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
    </Stack.Navigator>
  );
}
function favDrawer() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="Categories" component={CategoryStack} />
      <Drawer.Screen name="FilterScreen" component={FilterScreen} />
    </Drawer.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen name="Categories" component={CategoryStack} />
      <Drawer.Screen name="Filters" component={FilterScreen} />
    </Drawer.Navigator>
  );
}



function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null, // Hide icons for tabs
        tabBarActiveTintColor: 'white', // Color of the active tab label
        tabBarInactiveTintColor: 'black', // Color of the inactive tab label
        tabBarLabelStyle: styles.label, // Style for the tab label
        tabBarStyle: styles.tabBar, // Style for the tab bar
      }}
    >
      <Tab.Screen name="Categories" component={MyDrawer} />
      <Tab.Screen name="Favourites" component={favDrawer} />
    </Tab.Navigator>
  );
}

export default function MealsNavigator() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.accentColor, // Background color of the tab bar
    paddingBottom: 10,
  },
  label: {
    fontSize: 20, // Font size of the tab label
    fontWeight: 'bold', // Font weight of the tab label
  },
  drawer: {
    backgroundColor: Colors.primaryColor, // Background color of the drawer
  },
  drawerLabel: {
    fontSize: 18, // Font size of the drawer label
  },
});
