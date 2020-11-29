import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, StatusBar, Dimensions } from "react-native";
import Contact from "../components/Contact/Contact";
import GettingStarted from "../components/GettingStarted/GettingStarted";
import Home from "../components/Home/Home";
import ListingInfo from "../components/ListingInfo/ListingInfo";

// dimensions of the screen
const {width, height} = Dimensions.get("window");

import Listings from "../components/Listings/Listings";

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Home Screen
export const HomeScreen = ({ navigation }) => {
    return (
      <ScreenContainer>
        {/*<SafeAreaView style={styleScreen.mainCont}>
    </SafeAreaView>*/}
      <View style={styleScreen.testCont}>
        <Home navigation={navigation} />
      </View>
      </ScreenContainer>
    );
  };

// Listings Screen to show all the listings
export const ListingScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
       {/*<SafeAreaView style={styleScreen.mainCont}>
    </SafeAreaView>*/}
      <View style={styleScreen.testCont}>
        <Listings navigation={navigation} />
      </View>
    </ScreenContainer>
  );
};

// Contact screen for info about dad
export const ContactScreen = ({ navigation }) => {
    return (
      <ScreenContainer>
      {/*<SafeAreaView style={styleScreen.mainCont}>
    </SafeAreaView>*/}
        <View style={styleScreen.testCont}>
          <Contact navigation={navigation} />
        </View>
      </ScreenContainer>
    );
};


// Contact screen for info about dad
export const GettingStartedScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
    {/*<SafeAreaView style={styleScreen.mainCont}>
  </SafeAreaView>*/}
      <View style={styleScreen.testCont}>
        <GettingStarted navigation={navigation} />
      </View>
    </ScreenContainer>
  );
};

const styleScreen = StyleSheet.create({
  mainCont: {
    flex: 1,
    width: width,
    height: height,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  testCont: {
    flex: 1,
    width: width,
    height: height,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
