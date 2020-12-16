import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Animated, Image, StatusBar, TouchableOpacity} from 'react-native'
import ArrowRightSVG from '../../assets/svg/ArrowRight';
import LocationSVG from '../../assets/svg/Location';
import RupeesSVG from '../../assets/svg/Rupees';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function HomeListings ({navigation, listing}) {

    const handleListingRoute = () => {
        navigation.navigate('ListingScreen', {
            screen: 'ListingInfo',
            params: {
                listing: listing,
                navigation: navigation,
                page: "home"
            },
          });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => handleListingRoute()}>
            <View style={styles.sliderContainer}>
                <Image source={{ uri: listing.images[0] }} style={styles.img}/>
                <View 
                style={styles.listingType}>
                    <Text style={{color: "#00509D"}}>{listing.type}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={{flexDirection: "row", color: "#00509D", fontSize: 18, fontWeight: "700", marginLeft: 10, marginVertical: 5, }}>{listing.name}</Text>
                <Text 
                ellipsizeMode="tail"
                numberOfLines={1}
                maxLength={4} 
                style={{flexDirection: "row", color: "#898881", fontSize: 12, fontWeight: "400", marginLeft: 10, marginVertical: 5, justifyContent: 'center'}}>
                <LocationSVG /> {listing.locality}
                </Text>
                <View style={{flexDirection: "row", height: 65, width: "100%", alignItems: "center"}}>
                
                <Text style={{flexDirection: "row", color: "#474643", fontSize: 20, fontWeight: "700", marginLeft: 10, marginVertical: 5, }}><RupeesSVG color={"#474643"}/> {listing.price}</Text>
                <View style={{
                    position: "absolute", 
                    bottom: 0, 
                    right: 0, 
                    width: 75, 
                    height: 60, 
                    backgroundColor: "#00509D", 
                    borderTopLeftRadius: 40, 
                    borderBottomRightRadius: 40, 
                    alignItems:"center", 
                    justifyContent: "center",
                    zIndex: 10,
                }}><ArrowRightSVG /></View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 1.5, 
        height: height / 2.3,
        borderRadius: 40,
        alignItems :"center",
        backgroundColor: "#E8EBF0",
        marginLeft: 30,
        marginRight: 10, 
    },
    sliderContainer: {
        flex: 1.30,
        // alignItems :"center",
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    infoContainer: {
        flex: 0.7,
        borderRadius: 2,
        width: "100%",
    },
    listingType: {
        position: "absolute", 
        bottom: 25,
        left: 20, 
        paddingHorizontal: 10,
        paddingVertical: 5, 
        borderRadius: 3, 
        backgroundColor: "#fff", 
        alignItems: "center"
    },
    img: {
        // flex: 1.3,
        width: width / 1.5,
        height: (height / 2.5) * 0.7, 
        alignItems: "center",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    }
})