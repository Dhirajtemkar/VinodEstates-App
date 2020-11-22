import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, StatusBar, Dimensions } from "react-native";
import Contact from "../components/Contact/Contact";
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
        <SafeAreaView style={styleScreen.mainCont}>
          <Home navigation={navigation} />
        </SafeAreaView>
      </ScreenContainer>
    );
  };

// Listings Screen to show all the listings
export const ListingScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <SafeAreaView style={styleScreen.mainCont}>
        <Listings navigation={navigation} />
      </SafeAreaView>
    </ScreenContainer>
  );
};

// ListingsInfo screen more info abt some listing
export const ListingInfoScreen = ({ navigation }) => {
    return (
      <ScreenContainer>
        <SafeAreaView style={styleScreen.mainCont}>
          <ListingInfo navigation={navigation} />
        </SafeAreaView>
      </ScreenContainer>
    );
};

// Contact screen for info about dad
export const ContactScreen = ({ navigation }) => {
    return (
      <ScreenContainer>
        <SafeAreaView style={styleScreen.mainCont}>
          <Contact navigation={navigation} />
        </SafeAreaView>
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
});
