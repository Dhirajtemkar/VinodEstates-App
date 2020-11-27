import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity, Pressable} from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import BathroomSVG from '../../assets/svg/Bathroom';
import BedroomSVG from '../../assets/svg/Bedroom';
import LocationSVG from '../../assets/svg/Location';
import RupeesSVG from '../../assets/svg/Rupees';
import ScreenHeader from '../Header/ScreenHeader';
import Carousel from './Carousel';
import Listings from './Listings';

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
        <View style={styles.container}> 
        <TouchableNativeFeedback 
            onPress={() => handleListClick()}
        >
            <View style={{width: width - 40, height: height / 4.5, alignItems: 'center', borderRadius: 20}}>
                <Carousel data={listing.images} />
                <View 
                style={styles.listingType}>
                    <Text>{listing.type}</Text>
                </View>
            </View>
            <View style={{padding: 5}}>
                <View style={styles.row}>
                    <Text style={styles.boldTit}>{listing.name}</Text>
                    <Text style={styles.boldRate}><RupeesSVG /> {listing.price}</Text>
                </View>
                <View style={styles.row}>
                    <LocationSVG />
                    <Text style={styles.locality}>{listing.locality}</Text>
                </View>
                <View style={styles.row}>
                    {
                        listing.category === "Commercial" ? (<View />) : (
                            <Text style={styles.lastRowTxt}>{listing.bedrooms} <BedroomSVG /></Text>
                        )
                    }
                    <Text style={styles.lastRowTxt}>{listing.bathrooms} <BathroomSVG /></Text>
                    <Text style={styles.lastRowTxt}>{listing.sizeInSqft} sqft.</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width - 40,
        height: height / 3,
        // borderWidth: 1,
        borderRadius: 20
    },
    image: {
        marginLeft: -0.5,
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    },
    listingType: {
        position: "absolute", 
        bottom: 20,
        left: 20, 
        paddingHorizontal: 10,
        paddingVertical: 5, 
        borderRadius: 3, 
        backgroundColor: "#fff", 
        alignItems: "center"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginVertical: 2,
    },
    boldTit: {
        color: "#474643", 
        fontSize: 16, 
        fontWeight: "700", 
        flex: 2,
    },
    boldRate: {
        color: "#474643", 
        fontSize: 16, 
        fontWeight: "700", 
        // flex: 1,
        // alignItems: "flex-end",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    locality: {
        color: "#474643",
        fontSize: 12,
        marginLeft: 5,
        // flex: 1,
    },
    lastRowTxt: {
        marginRight: 17,
        fontSize: 14,
        fontWeight: "700",
        color: "#898881",
        alignItems: "baseline",
        textAlignVertical: 'bottom',
    }
})