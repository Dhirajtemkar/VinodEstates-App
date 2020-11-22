import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactScreen, HomeScreen, ListingInfoScreen, ListingScreen } from './Screens';

const HomeStack = createStackNavigator();
const ListingStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStackScreen = ({ route }) => {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="ListingInfo" component={ListingInfoScreen} />
      </HomeStack.Navigator>
    );
};

const ListingStackScreen = ({ route }) => {
    return (
      <ListingStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <ListingStack.Screen name="Listings" component={ListingScreen} />
        <ListingStack.Screen name="ListingInfo" component={ListingInfoScreen} />
      </ListingStack.Navigator>
    );
};

const ContactStackScreen = ({ route }) => {
    return (
      <ContactStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <ContactStack.Screen name="Contact" component={ContactScreen} />
      </ContactStack.Navigator>
    );
};

function MainTabs({ route }) {  
    return (
      <Tabs.Navigator 
        // tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tabs.Screen name="HomeScreen" component={HomeStackScreen} />
        <Tabs.Screen name="ListingScreen" component={ListingStackScreen} />
        <Tabs.Screen name="ContactScreen" component={ContactStackScreen} />
      </Tabs.Navigator>
    );
}

export default MainTabs;