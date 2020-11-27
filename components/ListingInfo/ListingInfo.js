import React, {useState, useEffect} from 'react'
import {View, Dimensions, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Animated, ScrollView} from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';
// dimensions of the screen
const {width, height} = Dimensions.get("window");

function renderContent () {
    return (
        <View style={{width: width, backgroundColor: "#c4c4c4"}}>
            <Text>This is the bottom sheet</Text> 
            <ScrollView>
            <View style={{width: width, height: height, backgroundColor: "#ff32cd"}}></View>
            <View style={{width: width, height: height, backgroundColor: "#ff264d"}}></View>
            </ScrollView>
        </View>
    )
}

export default function ListingInfo ({ route }) {
    const SlideInLeft = new Animated.Value(0);
    
    const _start = () => {
        return Animated.parallel([
          Animated.timing(SlideInLeft, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
          }),
        ]).start();
      };

      const sheetRef = React.useRef(null);

      useEffect(() => {
        sheetRef.current.snapTo(1)
        _start()
      }, [])

    return (
        <SafeAreaView style={styles.container}>
        <View 
            style={{
                width: width, 
                height: height / 2.8, 
                backgroundColor: "#fff", 
                // position: "absolute", 
                // top: 0, 
                // zIndex: 5,
            }}>
                <Text style={{marginTop: 45}}>This is the ListingInfo page! routed from {route.params.listing.name}</Text>
        </View>
        {/*
            <View style={{height: height / 3, width: width, zIndex: 1,}}><Text>This is virtual!!!</Text></View>
                <ScrollView style={{zIndex: 8}}>    
            <Animated.View
            style={{
                transform: [
                  {
                    translateY: SlideInLeft.interpolate({
                      inputRange: [0, 1],
                      outputRange: [400, 0]
                    })
                  }
                ],
                // flex: 1,
                height: height,
                width: width,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                elevation: 5,
                backgroundColor: "#c4c4c4",
                justifyContent: "center",
                zIndex: 8,
              }}
            ><Text>This is the animated view</Text>
            </Animated.View>
            </ScrollView>*/}
            <BottomSheet
                ref={sheetRef}
                snapPoints={[height, height / 1.5]}
                borderRadius={40}
                renderContent={renderContent}
                zIndex="10"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})