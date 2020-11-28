import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, ImageBackground} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function Contact () {

    return (
        <ImageBackground source={require('../../assets/Contact/contactBackground.png')} style={styles.image}>
            <View style={styles.container}>
                <ScreenHeader />
                <Text>This is the Contact page!</Text>
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
        marginLeft: -0.5,
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    },
})