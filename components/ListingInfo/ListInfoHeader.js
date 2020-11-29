import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import RupeesSVG from '../../assets/svg/Rupees';
import LocationSVG from '../../assets/svg/Location';
import BedroomSVG from '../../assets/svg/Bedroom';
import BathroomSVG from '../../assets/svg/Bathroom';
import AreaSVG from '../../assets/svg/Area';
import { ScrollView } from 'react-native-gesture-handler';

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
                <LocationSVG page={"listInfo"}/> <Text style={{color: "#474643", fontSize: 14, fontWeight: "400", marginLeft: 5}}>{props.listing.locality}</Text>
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.badgeRow}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeTxt}>{props.listing.type}</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgeTxt}>{props.listing.category}</Text>
                    </View>
                    <View style={styles.badge}>
                    {
                        props.listing.furnishment ? (
                            <Text style={styles.badgeTxt}>Furnished</Text>
                            ) : (
                            <Text style={styles.badgeTxt}>Un-Furnished</Text>
                        )
                    }
                    </View>
                </View>
            </ScrollView>
            <View style={styles.infoRow}>
                {
                    props.listing.category === "Commercial" ? (<View />) : (
                        <Text style={styles.lastRowTxt}><BedroomSVG /> {props.listing.bedrooms} Beds</Text>
                    )
                }
                <Text style={styles.lastRowTxt}><BathroomSVG /> {props.listing.bathrooms} Bathrooms</Text>
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
    badgeRow: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginVertical: 10,
    },
    badge: {
        paddingVertical: 7,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(232, 235, 240, 0.2)",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#00509D",
        marginRight: 10,
    },
    badgeTxt: {
        color: "#00509D",
        fontSize: 16,
        fontWeight: "700",
    },
    infoRow: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginVertical: 5,
        // justifyContent: "space-around",
    },
    lastRowTxt: {
        marginRight: 20,
        fontSize: 16,
        fontWeight: "700",
        color: "#898881",
        alignItems: "baseline",
        textAlignVertical: 'bottom',
    }
})