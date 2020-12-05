import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, ScrollView, TextInput, Animated, FlatList} from 'react-native'
import BuySVG from '../../assets/svg/Buy';
import ComGettingStartedSVG from '../../assets/svg/ComGettingStarted';
import RentSVG from '../../assets/svg/Rent';
import ResGettingStartedSVG from '../../assets/svg/ResGettingStarted';
import XSVG from '../../assets/svg/X';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function FilterScreen ({route}) {

    const handleBack = () => {
        route.params.navigation.pop()
    }
    const filtersOnFilterPage = ["Sale", "Rent", "Commercial", "Residential"]
    const [filterPropType, setFilterPropType] = useState("");
    const [PropFilterOn, setPropFilterOn] = useState(false);

    const bedroomsOnFilterPage = ["Any", "studio", "1", "2", "3", "4+"]
    const [filterBedType, setFilterBedType] = useState("Any");
    const [BedFilterOn, setBedFilterOn] = useState(false);

    const furnishOnFilterPage = ["Any", "Furnished", "Un-Furnished"]
    const [filterFurinshType, setFilterFurinshType] = useState("Any");
    const [FurinshFilterOn, setFurinshFilterOn] = useState(false);

    const handleReset = () => {
        setFilterPropType("")
        setPropFilterOn(false)
        setFilterBedType("Any")
        setBedFilterOn(false)
        setFilterFurinshType("Any")
        setFurinshFilterOn(false)
    }
    const handleFilterSubmit = () => {
        route.params.navigation.navigate('ListingScreen', {
            screen: 'Listings',
            params: {
                navigation: route.params.navigation,
                page: "filter",
                filters: {
                    propType: filterPropType,
                    bedType: filterBedType,
                    furnishType: filterFurinshType,
                },
            },
          });
    }
    return (
        <View style={styles.container}>
            <View style={{width: width, flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity onPress={() => handleBack()} style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}><XSVG /></TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: "700", color: "#474643", flex: 1, textAlign: "center"}}>Filters</Text>
                <View style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity onPress={() => handleReset()} style={{marginVertical: 15, marginHorizontal: 5, paddingVertical: 7, backgroundColor: "#FDC500", justifyContent: "center", alignItems: "center", borderRadius: 7, paddingHorizontal: 20}}>
                    <Text style={{color: "#fff", fontWeight: "700", fontSize: 16}}>Reset</Text>
                </TouchableOpacity>
                </View>
            </View>
            {/*this is the main container*/}
            <ScrollView style={{width: width}}>
                <View style={{marginVertical: 10}}>
                    <Text style={styles.tit}>Property Type</Text>
                    <View style={{alignItems: "center", marginVertical: 10, marginLeft: 20}}>
                        <FlatList 
                        data={filtersOnFilterPage}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity 
                                key={index} 
                                style={PropFilterOn === true && filterPropType === item ? styles.onFilter1 : styles.onFilter}
                                onPress={() => {
                                    if (PropFilterOn === true && filterPropType === item){
                                        setPropFilterOn(false)
                                        // setFilterPropType(item)
                                    } else if (PropFilterOn === true && filterPropType !== item) {
                                        setPropFilterOn(true)
                                        setFilterPropType(item)
                                    } else if (PropFilterOn === false) {
                                        setPropFilterOn(true)
                                        setFilterPropType(item)
                                    }
                                }}
                                >
                                    {
                                        item === "Residential" ? (<ResGettingStartedSVG page={"home"} color={filterPropType === "Residential" ? "#fff" : "#00509D"}/>) : (
                                            <View>
                                                {
                                                    item === "Commercial" ? (<ComGettingStartedSVG page={"home"} color={filterPropType === "Commercial" ? "#fff" : "#00509D"} />) : (
                                                        <View>
                                                            {
                                                                item === "Rent" ? (<RentSVG page={"home"} color={filterPropType === "Rent" ? "#fff" : "#00509D"} />) : (<BuySVG page={"home"} color={filterPropType === "Sale" ? "#fff" : "#00509D"}/>)
                                                            }
                                                        </View>
                                                    )
                                                }
                                            </View>
                                        )
                                    }
                                    <Text style={ PropFilterOn === true && filterPropType === item ? styles.onFilterTxt1 : styles.onFilterTxt}>{item}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        // numColumns={1}
                        />
                    </View>
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={styles.tit}>Bedrooms</Text>
                    <View style={{alignItems: "center", marginVertical: 10, marginLeft: 20}}>
                        <FlatList 
                        data={bedroomsOnFilterPage}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity 
                                key={index} 
                                style={BedFilterOn === true && filterBedType === item ? styles.onFilter1 : styles.onFilter}
                                onPress={() => {
                                    if (BedFilterOn === true && filterBedType === item){
                                        setBedFilterOn(false)
                                        // setFilterPropType(item)
                                    } else if (BedFilterOn === true && filterBedType !== item) {
                                        setBedFilterOn(true)
                                        setFilterBedType(item)
                                    } else if (BedFilterOn === false) {
                                        setBedFilterOn(true)
                                        setFilterBedType(item)
                                    }
                                }}
                                > 
                                    <Text style={ BedFilterOn === true && filterBedType === item ? styles.onFilterTxt1 : styles.onFilterTxt}>{item}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        // numColumns={1}
                        />
                    </View>
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={styles.tit}>Furnishing</Text>
                    <View style={{alignItems: "center", marginVertical: 10, marginLeft: 20}}>
                        <FlatList 
                        data={furnishOnFilterPage}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity 
                                key={index} 
                                style={FurinshFilterOn === true && filterFurinshType === item ? styles.onFilter1 : styles.onFilter}
                                onPress={() => {
                                    if (FurinshFilterOn === true && filterFurinshType === item){
                                        setFurinshFilterOn(false)
                                        // setFilterPropType(item)
                                    } else if (FurinshFilterOn === true && filterFurinshType !== item) {
                                        setFurinshFilterOn(true)
                                        setFilterFurinshType(item)
                                    } else if (FurinshFilterOn === false) {
                                        setFurinshFilterOn(true)
                                        setFilterFurinshType(item)
                                    }
                                }}
                                > 
                                    <Text style={ FurinshFilterOn === true && filterFurinshType === item ? styles.onFilterTxt1 : styles.onFilterTxt}>{item}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        // numColumns={1}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{width: width, position: "absolute", bottom: 20, alignItems: "center", justifyContent:"center"}}>
                <TouchableOpacity onPress={() => handleFilterSubmit()} style={styles.applyBtn}>
                    <Text style={{fontSize: 18, fontWeight: "700", color: "#fff"}}>Show Properties</Text>
                </TouchableOpacity>
            </View>
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
    }, 
    tit: {
        marginLeft: 20,
        fontWeight: "700",
        fontSize: 18,
        marginVertical: 10,
    },
    onFilter: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "rgba(232, 235, 240, 0.5)",
        marginRight: 20,
    },
    onFilter1: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#00509D",
        marginRight: 20,
    },
    onFilterTxt: {
        fontSize: 14,
        fontWeight: "700",
        color: "#00509D",
    },
    onFilterTxt1: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff",
    },
    applyBtn: {
        width: width - 45,
        alignItems: "center",
        justifyContent: "center",
        height: width / 7,
        borderRadius: 10,
        backgroundColor :"#00509D"
    }
})