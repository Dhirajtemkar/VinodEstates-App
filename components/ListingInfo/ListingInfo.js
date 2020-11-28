import React, {useState, useEffect} from 'react'
import {View, Dimensions, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Animated, ScrollView, TouchableOpacity} from 'react-native'
import BackSVG from '../../assets/svg/Back';
import Carousel from '../Listings/Carousel';
import SecondHalf from './SecondHalf';
// dimensions of the screen
const {width, height} = Dimensions.get("window");


export default function ListingInfo ({ route }) {
    const SlideInLeft = new Animated.Value(0);
    const listing = route.params.listing;
    const _start = () => {
        return Animated.parallel([
          Animated.timing(SlideInLeft, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
          }),
        ]).start();
      };

      useEffect(() => {
       
        _start()
      }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
        onPress={() => {
          route.params.navigation.pop()
        }}
        style={styles.backBtn}><BackSVG /></TouchableOpacity>
      </View>
      <ScrollView style={{zIndex: 8}}>    
        <View style={styles.sliderView}>
          <Carousel data={listing.images} page={"listInfo"}/>
        </View>
        <View style={styles.virtualView} />
        <Animated.View
        style={{
          transform: [
            {
              translateY: SlideInLeft.interpolate({
                inputRange: [0, 1],
                outputRange: [-485, 0]
              })
            }
          ],
          // flex: 1,
          height: height,
          width: width,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          elevation: 5,
          backgroundColor: "#fff",
          // justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
          // padding: 20, 
          }}
        >
          <SecondHalf listing={listing} />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
      position: "absolute",
      top: 0,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      width: width,
      flexDirection: "row",
      // justifyContent: "center",
      alignItems: "center",
      zIndex: 15,
    },
    backBtn: {
      width: 40, 
      height: 40, 
      borderRadius: 7, 
      backgroundColor: "rgba(0,0,0,0.2)", 
      justifyContent: "center", 
      alignItems: 'center',
      marginLeft: 20, 
    },
    sliderView: {
      width: width, 
      height: height / 2.4, 
      backgroundColor: "#fff", 
      position: "absolute", 
      top: 0, 
      zIndex: 5,
      alignItems: "center",
      borderWidth: 2,
    },
    virtualView: {height: height / 2.8, width: width, zIndex: 1,},
})