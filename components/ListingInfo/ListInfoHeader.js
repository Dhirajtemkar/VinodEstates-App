import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import RupeesSVG from '../../assets/svg/Rupees';
import LocationSVG from '../../assets/svg/Location';
import BedroomSVG from '../../assets/svg/Bedroom';
import BathroomSVG from '../../assets/svg/Bathroom';
import AreaSVG from '../../assets/svg/Area';

const {width, height} = Dimensions.get("window");

export default function ListInfoHeader (props) {
    return (
        <View style={styles.container}>
            <View style={{width:"100%", flexDirection: "row", alignItems: "flex-start", marginVertical: 5,}}>
                <Text style={styles.infoTit}>{props.listing.name}</Text>
                <Text style={styles.infoRate}>
                    <RupeesSVG color={"#57CC99"}/> {props.listing.price}
                    {
                        props.listing.type === "Rent" ? (
                            <Text style={{color: "#474643", fontSize: 12}}>/ month</Text>
                        ) : (<View />)
                    }
                </Text>
            </View> 
            <Text style={{flexDirection: "row", marginVertical: 5, width: "100%"}}>
                <LocationSVG page={"listInfo"}/> <Text style={{color: "#474643", fontSize: 14, fontWeight: "400"}}>{props.listing.locality}</Text>
            </Text>
            <View style={styles.infoRow}>
                {
                    props.listing.category === "Commercial" ? (<View />) : (
                        <Text style={styles.lastRowTxt}><BedroomSVG /> {props.listing.bedrooms} Beds</Text>
                    )
                }
                <Text style={styles.lastRowTxt}><BathroomSVG /> {props.listing.bathrooms} Baths</Text>
                <Text style={styles.lastRowTxt}><AreaSVG /> {props.listing.sizeInSqft} sqft.</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    infoTit: {
        color: "#00509D", 
        fontSize: 24, 
        fontWeight: "700", 
        flex: 2
    },
    infoRate: {
        color: "#57CC99", 
        fontSize: 20, 
        fontWeight: "700", 
        flexDirection: "row", 
        justifyContent: "flex-end", 
        flex:1.5,
        textAlign: "right",
        marginTop: 5,
    },
    infoRow: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginVertical: 5,
    },
    lastRowTxt: {
        marginRight: 17,
        fontSize: 16,
        fontWeight: "700",
        color: "#898881",
        alignItems: "baseline",
        textAlignVertical: 'bottom',
    }
})