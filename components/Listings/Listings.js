import React, {useState, useEffect} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import ListingRender from './ListingRender';
import SearchBar from '../Search/SearchBar';
import { listingData } from '../../data';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function Listings ({navigation, route}) {
    // console.log(navigation)
    const [data, setData] = useState(listingData)

    const [Search, setSearch] = useState("")

    const [AppliedFilters, setAppliedFilters] = useState([])

    const [filterState, setFilterState] = useState("");
    const [FilterOn, setFilterOn] = useState(false);
    const handleFilterToggle = () => {
        navigation.navigate("FilterScreen", {
            navigation: navigation,
            setFilterState: setFilterState,
        })
    }
    // console.log(route)
    useEffect(() => {
        if (route.params.page === "home") {
            // console.log("params passed!!")
            setFilterOn(true)
            setFilterState(route.params.homeFilter)
        }
    }, [route.params.homeFilter])
    

    const filtersOnListingPage = ["Sale", "Rent", "Commercial", "Residential", "Size"]
    return (
        <View style={styles.container}>           
            <View 
            style={{width: width}}>
                <View style={styles.pageHeader}>
                    <Text style={styles.pageTit}>Search Listings</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <SearchBar handleFilterToggle={handleFilterToggle} setSearch={setSearch} Search={Search}/>
                </View>
                <View style={{alignItems: "center", marginVertical: 10, marginLeft: 20}}>
                    <FlatList 
                    data={filtersOnListingPage}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity 
                            key={index} 
                            style={FilterOn === true && filterState === item ? styles.onFilter1 : styles.onFilter}
                            onPress={() => {
                                if (FilterOn === true && filterState === item){
                                    setFilterOn(false)
                                    // setFilterState(item)
                                } else if (FilterOn === true && filterState !== item) {
                                    setFilterOn(true)
                                    setFilterState(item)
                                } else if (FilterOn === false) {
                                    setFilterOn(true)
                                    setFilterState(item)
                                }
                            }}
                            > 
                                <Text style={ FilterOn === true && filterState === item ? styles.onFilterTxt1 : styles.onFilterTxt}>{item}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    // numColumns={1}
                    />
                </View>
            </View>
            <ListingRender 
                data={data} 
                navigation={navigation} 
                AppliedFilters={AppliedFilters} 
                filterState={filterState} 
                Search={Search}
                routedPage={route.params.page}
                filterScreen={route.params.filters}
                setFilterState={setFilterState}
                setFilterOn={setFilterOn}
                route={route}
                // homeFilter={route.params === undefined ? "" : route.params.filter}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#fff",
        // height: height,
        // marginBottom: 20,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    },
    pageHeader: {
        width: width, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginVertical: 10
    },
    pageTit: {
        fontSize: 18, 
        fontWeight: "700", 
        color: "#474643"
    },
    onFilter: {
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "rgba(232, 235, 240, 0.5)",
        marginRight: 20,
    },
    onFilter1: {
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 7,
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
})