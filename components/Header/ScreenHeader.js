import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, ImageBackground} from 'react-native'
import SmallIcon from '../../assets/svg/SmallIcon';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function ScreenHeader () {

    return (
        <View style={styles.container}>
            <SmallIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        paddingLeft: 20,
        // height: height,
    },
})