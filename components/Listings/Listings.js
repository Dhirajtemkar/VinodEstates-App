import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, ImageBackground, ScrollView} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import ListingRender from './ListingRender';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function Listings ({navigation}) {
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
            price: 35000,
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
            price: 35000000,
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
            price: 20000,
            images: [
                require('../../assets/Listings/listing1-1.jpg'), 
                require('../../assets/Listings/listing2-1.jpg'), 
                require('../../assets/Listings/listing1-1.jpg')
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
            price: 25000,
            images: [
                require('../../assets/Listings/listing4-1.jpg'), 
                require('../../assets/Listings/listing4-2.jpg') 
            ],
            amenities: ["Parking"],
        },
    ])
    return (
        <ImageBackground source={require('../../assets/Listings/listingBackground.png')} style={styles.image}>
            <ScrollView style={styles.container}>                            
                <View 
                style={{
                    width: width, 
                    // height: height / 8,
                    // zIndex: 1
                }}>
                    <ScreenHeader />
                    <View style={{alignItems: "center"}}>
                    <Text>Search bar space!</Text>
                    </View>
                </View>
                <ListingRender data={data} navigation={navigation}/>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        // height: height,
        // marginBottom: 20,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    },
})