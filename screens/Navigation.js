import React,{useState} from 'react';
import {View, TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactScreen, HomeScreen, ListingInfoScreen, ListingScreen } from './Screens';
import HomeSVG from '../assets/svg/Home';
import SearchSVG from '../assets/svg/Search';
import ContactSVG from '../assets/svg/Contact';
import TabTopSVG from '../assets/svg/TabTop';
import ListingInfo from '../components/ListingInfo/ListingInfo';

const {width, height} = Dimensions.get("window");

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
        <HomeStack.Screen name="ListingInfo" component={ListingInfo} />
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
        <ListingStack.Screen name="ListingInfo" component={ListingInfo} />
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
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tabs.Screen name="HomeScreen" component={HomeStackScreen} />
        <Tabs.Screen name="ListingScreen" component={ListingStackScreen} />
        <Tabs.Screen name="ContactScreen" component={ContactStackScreen} />
      </Tabs.Navigator>
    );
}

function MyTabBar({ state, descriptors, navigation }) {
    const [backColor, setBackColor] = useState("#00509D")
    return (
      <View
        style={{
          flexDirection: "row",
          height: width / 7,
          backgroundColor: "rgba(255,255,255,1)",
          elevation: 2,
          alignItems: "center",
          zIndex: 5,
        //   marginHorizontal: 35,
        //   marginBottom: 10,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;
  
          const isFocused = state.index === index;
          const color = isFocused ? "#ff264d" : "#707070";
  
          const onPress = () => {
            
            if(route.name === "HomeScreen"){
                setBackColor("#00509D")
            } else if (route.name === "HomeScreen") {
                setBackColor("#00509D")
            } else {
                setBackColor("#00509D")
            }

            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
  
            if (
              !isFocused &&
              !event.defaultPrevented) {
              navigation.navigate(route.name);
            } else {
            }
          };
  
          return (
            <TouchableOpacity
              onPress={onPress}
              style={{
                justifyContent: "center",
                width: width / 3,
                alignItems: "center",
              }}
              key={index * 2}
            >
              {route.name == "HomeScreen" ? (
                <View style={styles.eachTab}>
                {/*<TabTopSVG style={styles.topTab} color={isFocused ? "#ff264d" : "#707070"} />*/}
                <HomeSVG color={ isFocused ? "#00509D" : "#C4C4C4" } />
                </View>
              ) : route.name == "ListingScreen" ? (
                <View style={styles.eachTab}>
                {/*<TabTopSVG  style={styles.topTab} color={isFocused ? "#ff264d" : "#707070"}/>*/}
                <SearchSVG color={ isFocused ? "#00509D" : "#C4C4C4" } />
                </View>
              ) : (
                <View style={styles.eachTab}>
                {/*<TabTopSVG  style={styles.topTab} color={isFocused ? "#ff264d" : "#707070"}/>*/}
                <ContactSVG color={ isFocused ? "#00509D" : "#C4C4C4" } />
                </View>
              )}
              
              {
                route.name == "HomeScreen" ? ( 
                    isFocused ? (<Text style={{color: "#00509D"}}>Home</Text>) : (<View />) 
                    ) : 
                route.name == "ListingScreen" ? ( 
                    isFocused ? (<Text style={{color: "#00509D"}}>Listings</Text>) : (<View />) 
                    ) : 
                    ( isFocused ? (<Text style={{color: "#00509D"}}>Contact</Text>) : (<View />) 
                    )
            }
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  const styles = StyleSheet.create({
      topTab: {
        position: "absolute",
        top: -31,
        zIndex: 0,
      },
      eachTab: {
        alignItems: "center",
      }
  })

export default MainTabs;