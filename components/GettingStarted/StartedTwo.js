import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Button, ImageBackground, Image} from 'react-native'

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function StartedTwo({route}) {

    return (
        <View style={styles.container}>
            <Text>This is the Getting Started page 2</Text>
            <View>
            <Button 
            onPress={() => {
                route.params.setToken("Open")
            }} 
            title="Getting Started"
            color="#FDC500"
            style={{borderRadius: 7, elevation: 7}}
            // accessibilityLabel="Learn more about this App"
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems :"center",
    }
})