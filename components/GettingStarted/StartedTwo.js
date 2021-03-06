import React, {useState, useEffect, useRef} from 'react'
import {View, Dimensions, Text, StyleSheet, Button, Animated, Image} from 'react-native'
import CloudLeftSVG from '../../assets/svg/CloudLeft';
import ResGettingStartedSVG from '../../assets/svg/ResGettingStarted';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function StartedTwo({ route }) {
    const SlideInLeft = new Animated.Value(0);
    const SlideInRight = new Animated.Value(0);
    const SlideInUp = new Animated.Value(0);
    const SlideInUp2 = new Animated.Value(0);
    const fadeAnim = useRef(new Animated.Value(0)).current

    const _start = () => {
        return Animated.parallel([
          Animated.timing(SlideInLeft, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true
          }),
          Animated.timing(SlideInRight, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true
          }),
          Animated.timing(SlideInUp, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true
          }),
          Animated.timing(SlideInUp2, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 1000,
            }),
        ]).start();
      };
      useEffect(() => {
       
        _start()
      }, [])

    return (
        <View style={styles.container}>
            <View 
            style={{
                alignItems: "center",
                justifyContent: "center",
                
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}>
                <Animated.View
                style={{
                transform: [
                    {
                    translateX: SlideInLeft.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-70, 0]
                    })
                    }
                ],
                marginTop: - width / 2,
                }}
                >
                    <CloudLeftSVG />
                </Animated.View>
                <View>
                    <ResGettingStartedSVG />
                </View>
                <Animated.View
                style={{
                transform: [
                    {
                    translateX: SlideInRight.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0]
                    })
                    }
                ],
                marginTop: - width ,
                }}
                >
                    <CloudLeftSVG />
                </Animated.View>
            </View>
            <Animated.View
                style={{
                transform: [
                    {
                    translateY: SlideInUp.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0]
                    })
                    }
                ],
                marginVertical: 20,
                marginHorizontal: 20,
                }}
            >
                <Text style={{fontSize: 20, fontWeight: "700", color: "#fff", textAlign: "center"}}>Find homes, Apartments, open houses near Santacruz Area.</Text>
            </Animated.View>
            <Animated.View
                style={{
                transform: [
                    {
                    translateY: SlideInUp2.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0]
                    })
                    }
                ],
                marginVertical: 20,
                marginHorizontal: 20,
                width: width / 2
                }}
            >
                <View style={{marginVertical: 20}}>
                    <Button 
                    onPress={() => {
                        route.params.navigation.navigate("StartedThree", {navigation: route.params.navigation})
                    }} 
                    title="Know More"
                    color="#FDC500"
                    style={{borderRadius: 15, elevation: 7, width: width / 4, opacity: fadeAnim, paddingHorizontal: 20, paddingVertical: 7}}
                    />
                </View>
            </Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00509D",
        alignItems: "center",
        justifyContent: "center",
    }
})