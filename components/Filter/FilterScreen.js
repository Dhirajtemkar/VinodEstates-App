import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, ScrollView, TextInput, Animated} from 'react-native'

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function FilterScreen ({route}) {
    return (
        <View style={styles.container}>
            <Text>Filters</Text>
            <Text>This is the filter screen</Text>
            <TouchableOpacity onPress={() => {
                route.params.setFilterState("Dhiraj")
                route.params.navigation.pop()
            }}><Text>Click</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})