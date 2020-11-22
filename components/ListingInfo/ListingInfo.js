import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet} from 'react-native'

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function ListingInfo () {

    return (
        <View style={styles.container}>
            <Text>This is the ListingInfo page!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})