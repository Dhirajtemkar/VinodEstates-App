import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, ImageBackground, ScrollView, TextInput} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import ListingRender from './ListingRender';
import SearchSVG from '../../assets/svg/Search';
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
            description: "This property is situated in a very calm and peacefull locality. It is a complete furnizhed 2BHK flat.",
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
            description: "This property is situated in a very calm and peacefull locality. It is a complete furnizhed 2BHK flat.",
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
            description: "This property is situated in a very calm and peacefull locality. It is a complete furnizhed 2BHK flat.",
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
            description: "This is a commercial block situated in at moments from the Main Road. Perfect location to open up your business.",
            price: "25,000",
            images: [
                require('../../assets/Listings/listing4-1.jpg'), 
                require('../../assets/Listings/listing4-2.jpg') 
            ],
            amenities: ["Parking"],
        },
    ])
    // <ImageBackground source={require('../../assets/Listings/listingBackground.png')} style={styles.image}></ImageBackground>
    return (
        <View style={styles.container}>                            
            <View 
            style={{width: width}}>
                <View style={styles.pageHeader}>
                    <Text style={styles.pageTit}>Search Listings</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <View style={{width: width - 40, height: height / 15.5, flexDirection: "row", backgroundColor: "#E8EBF0", borderRadius: 5}}>
                        <View style={{marginHorizontal: 10, flex: 0, flexDirection: "row", justifyContent: "center", height: height / 15.5, alignItems: "center"}}>
                            <SearchSVG color={"#898881"} />
                        </View>
                        <TextInput 
                            placeholder={"Search properties..."}
                            style={styles.Searchbar}
                            onChangeText={(searchString) => {
                            // setSearch(searchString);
                            // props.getSearchDone(searchString);
                            }}
                            // value={search}
                        />
                    </View>
                </View>
            </View>
            <ListingRender data={data} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
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
    Searchbar: {
        // width: ,
        flex: 2,
        // height: "100%",
        height: height / 16.5,
        backgroundColor: "#E8EBF0",
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 15,
        fontWeight: "700",
        alignItems: "baseline",
        color: "#474643",
        // elevation: 3,
        // shadowColor: "grey",
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
      },
})