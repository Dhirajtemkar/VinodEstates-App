import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import ListInfoHeader from './ListInfoHeader';
import SwimmingSVG from '../../assets/svg/Swimming';
import GymSVG from '../../assets/svg/Gym';
import GardenSVG from '../../assets/svg/Garden';
import ParkingSVG from '../../assets/svg/Parking';

const {width, height} = Dimensions.get("window");

export default function SecondHalf (props) {
    return (
        <View style={styles.container}>
            <ListInfoHeader listing={props.listing}/> 
            
            <Text style={{marginVertical: 10, fontSize: 16, fontWeight: "700", color: "#00509D", marginVertical: 5}}>Aminities</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{marginVertical: 10, flexDirection: "row"}}>
                { //["Swimming-Pool", "Gym", "Garden", "Parking"]
                    props.listing.amenities.map((each) => {
                        if(each === "Swimming Pool") {
                            return (
                                <View style={{marginRight: 10, alignItems :"center"}}>
                                    <SwimmingSVG />
                                    <Text style={{color:"#474643", fontSize: 14, fontWeight: "700", width: 75, textAlign: "center"}}>{each}</Text>
                                </View>
                            )
                        } else if (each === "Gym") {
                            return (
                                <View style={{marginRight: 10, alignItems :"center"}}>
                                    <GymSVG />
                                    <Text style={{color:"#474643", fontSize: 14, fontWeight: "700", width: 75, textAlign: "center"}}>{each}</Text>
                                </View>
                            )
                        } else if (each === "Garden") {
                            return (
                                <View style={{marginRight: 10, alignItems :"center"}}>
                                    <GardenSVG />
                                    <Text style={{color:"#474643", fontSize: 14, fontWeight: "700", width: 75, textAlign: "center"}}>{each}</Text>
                                </View>
                            )
                        } else if (each === "Parking") {
                            return (
                                <View style={{marginRight: 10, alignItems :"center"}}>
                                    <ParkingSVG />
                                    <Text style={{color:"#474643", fontSize: 14, fontWeight: "700", width: 75, textAlign: "center"}}>{each}</Text>
                                </View>
                            )
                        }
                    })
                }

            </View>
            </ScrollView>
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