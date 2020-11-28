import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import RupeesSVG from '../../assets/svg/Rupees';
import LocationSVG from '../../assets/svg/Location';
import BedroomSVG from '../../assets/svg/Bedroom';
import BathroomSVG from '../../assets/svg/Bathroom';
import AreaSVG from '../../assets/svg/Area';
import ListInfoHeader from './ListInfoHeader';

const {width, height} = Dimensions.get("window");

export default function SecondHalf (props) {
    return (
        <View style={styles.container}>
            <ListInfoHeader listing={props.listing}/> 
            <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 16, fontWeight: "700", color: "#00509D", marginVertical: 5}}>Details</Text>
                <Text style={{fontSize: 14, fontWeight: '300', color: "#474643", marginVertical: 5, textAlign: "justify", letterSpacing: 0.5}}>{props.listing.description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        padding: 20,
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