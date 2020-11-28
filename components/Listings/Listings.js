import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import ListingRender from './ListingRender';
import SearchBar from '../Search/SearchBar';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function Listings ({navigation}) {
    // console.log(navigation)
    const [data, setData] = useState([
        {
            name: "Quite & Charming",
            sizeInSqft: 750,
            bedrooms: 2,
            bathrooms: 2,
            type: "Rent",
            category: "Residential",
            furnishment: true,
            locality: "Vakola Village, Santacruz East, Mumbai",
            description: "This property is situated in a very calm and peacefull locality. It is a complete furnizhed 2BHK flat. The goal is to schedule a tour for the users based on the time given by the agents and landlords. So they visit really nice and affordable homes and can rent them.",
            price: "35,000",
            images: [
                require('../../assets/Listings/listing1-1.jpg'), 
                require('../../assets/Listings/listing2-1.jpg'), 
                require('../../assets/Listings/listing1-1.jpg')
            ],
            amenities: ["Swimming-Pool", "Gym", "Garden", "Parking"],
        },
        {
            name: "Gorgeous Kalina Bunglow",
            sizeInSqft: 1350,
            bedrooms: 4,
            bathrooms: 3,
            type: "Sale",
            category: "Residential",
            furnishment: false,
            locality: "Anand Nagar, Kalina, Mumbai",
            description: "This property is situated in a very calm and peacefull locality. It is a complete furnizhed 2BHK flat. The goal is to schedule a tour for the users based on the time given by the agents and landlords. So they visit really nice and affordable homes and can rent them.",
            price: "3,50,00,000",
            images: [
                require('../../assets/Listings/listing3-1.jpg'), 
                require('../../assets/Listings/listing3-2.jpg'), 
                require('../../assets/Listings/listing3-3.jpg')
            ],
            amenities: ["Gym", "Garden", "Parking"],
        },
        {
            name: "Apartment X",
            sizeInSqft: 400,
            bedrooms: 1,
            bathrooms: 1,
            type: "Rent",
            category: "Residential",
            furnishment: true,
            locality: "Vakola Village, Santacruz East, Mumbai",
            description: "This property is situated in a very calm and peacefull locality. It is a complete furnizhed 2BHK flat. The goal is to schedule a tour for the users based on the time given by the agents and landlords. So they visit really nice and affordable homes and can rent them.",
            price: "20,000",
            images: [
                require('../../assets/Listings/listing2-1.jpg'), 
                require('../../assets/Listings/listing1-1.jpg'), 
                require('../../assets/Listings/listing3-3.jpg')
            ],
            amenities: ["Garden", "Parking"],
        },
        {
            name: "Studio Space with Shutter",
            sizeInSqft: 375,
            // bedrooms: 1,
            bathrooms: 1,
            type: "Rent",
            category: "Commercial",
            furnishment: false,
            locality: "Datta Mandir Road, Santacruz East, Mumbai",
            description: "This is a commercial block situated in at moments from the Main Road. Perfect location to open up your business. The goal is to schedule a tour for the users based on the time given by the agents and landlords. So they visit really nice and affordable homes and can rent them.",
            price: "25,000",
            images: [
                require('../../assets/Listings/listing4-1.jpg'), 
                require('../../assets/Listings/listing4-2.jpg') 
            ],
            amenities: ["Parking"],
        },
    ])

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
                <View style={{alignItems: "center", marginTop: 10, marginLeft: 20}}>
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