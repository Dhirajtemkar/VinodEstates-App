import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity, Pressable} from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import ScreenHeader from '../Header/ScreenHeader';
import Carousel from './Carousel';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function SingleList ({listing, navigation}) {
    const handleListClick = () => {
        navigation.navigate("ListingInfo", {
            listing: listing,
            navigation: navigation,
        })
    }
    return (
        <View style={{
            width: width - 40,
            height: height / 3.5,
            // borderWidth: 1,
            borderRadius: 20
        }}> 
        <TouchableNativeFeedback 
            onPress={() => handleListClick()}
        >
            <View style={{width: width - 40, height: height / 4.5, alignItems: 'center', borderRadius: 20}}>
                <Carousel data={listing.images} />
                <View 
                style={{
                    position: "absolute", 
                    bottom: 20,
                    left: 20, 
                    paddingHorizontal: 10,
                    paddingVertical: 5, 
                    borderRadius: 3, 
                    backgroundColor: "#fff", 
                    alignItems: "center"
                }}>
                    <Text>{listing.type}</Text>
                </View>
            </View>
            <View>
                <Text>{listing.name}</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
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