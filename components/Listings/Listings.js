import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, ImageBackground} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function Listings () {

    return (
        <ImageBackground source={require('../../assets/Listings/listingBackground.png')} style={styles.image}>
            <View style={styles.container}>
                <ScreenHeader />
                <Text>This is the Listings page!</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    },
})