import React, {useState, useRef, useEffect} from 'react'
import {View, Dimensions, Text, StyleSheet, ImageBackground, Platform, StatusBar, ScrollView, Image} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import SearchBar from '../Search/SearchBar';
import SecondHalfHome from './SecondHalf';
import { listingData } from '../../data';
import { db } from '../../firebase/Firebase';


// {
//     name: "Quite & Charming",
//     sizeInSqft: 750,
//     bedrooms: 2,
//     bathrooms: 2,
//     type: "Rent",
//     category: "Residential",
//     furnishment: true,
//     locality: "Vakola Village, Santacruz East, Mumbai",
//     description: "This property is situated in a very calm and peacefull locality. It is a complete furnizhed 2BHK flat. The goal is to schedule a tour for the users based on the time given by the agents and landlords. So they visit really nice and affordable homes and can rent them.",
//     price: "35,000",
//     images: [
//         require('./assets/Listings/listing1-1.jpg'), 
//         require('./assets/Listings/listing2-1.jpg'), 
//         require('./assets/Listings/listing1-1.jpg')
//     ],
//     amenities: ["Swimming Pool", "Gym", "Garden", "Parking"],
// },


// Object {
//     "AllInclusive": "no",
//     "AptType": "Residential Apt",
//     "Balconies": "1",
//     "Bathrooms": "1",
//     "Bedrooms": "2",
//     "CarpetSize": "625",
//     "CityAdd": "Mumbai",
//     "CoveredParkings": "0",
//     "FurnishingOption": "SemiFurnished",
//     "HouseNoAdd": "room no. 101, ground floor, lorna apt., vakola st. anthony's road, Mumbai 400055",
//     "LandmarkAdd": "Vakola st. anthony's road",
//     "LocalityAdd": "vakola",
//     "Negotiable": "No",
//     "OpenParkings": "1",
//     "OwnershipOption": "Freehold",
//     "Parking": "No",
//     "ProjectNameAdd": "lorna apartments",
//     "Rate": 35000,
//     "Size": 750,
//     "Status": "ready to move",
//     "TaxAndCharge": "Yes",
//     "description": "this is a peaceful location, the area surrounding it has a lot of trees. the flat is besides a maternity hospital. its road touching. It has 2 schools at 2 min walk. even though its on the ground floor, the whole building is at a certain height. All in all, its a good location to stay.  ",
//     "image": Array [
//       "https://firebasestorage.googleapis.com/v0/b/vinodestates-1c0de.appspot.com/o/Multipleimage%2FScreenshot%20(38).png?alt=media&token=ee080d46-f873-4b7f-916a-957c43fe87b3",
//       "https://firebasestorage.googleapis.com/v0/b/vinodestates-1c0de.appspot.com/o/Multipleimage%2FScreenshot%20(36).png?alt=media&token=1d5e5805-e091-43db-b33b-9cb4d6339642",
//     ],
//     "lift": "no",
//     "listingType": "Rent",
//     "pipedGas": "no",
//     "propertyType": "Residential",
//     "waterSupply": "yes",
//   }




// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function Home ({navigation, route}) {
    console.log(route)
    const [data, setData] = useState([])
    const [dbListings, setDbListings] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        let temp = []
        let dbRef = db.collection('listings');
        let dbData = await dbRef.get();
        for (const doc of dbData.docs){
            temp.push(doc.data())
        }
        setData(temp)
        setDbListings(temp)    
        setLoading(false)
        console.log(temp)
    }, [])

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

    return (
        <ImageBackground source={require('../../assets/Home/homeBackground.png')} style={styles.image}>
            <View style={styles.container}>
                <ScrollView >
                    <ScreenHeader />
                    <View style={styles.pageHeader}>
                        <Text style={styles.head1}>Find the</Text>
                        <Text style={styles.head1}>Perfect Place</Text>
                        <Text style={styles.head2}>Discover your dream property. We’ll help you get the</Text>
                        <Text style={styles.head2}>best price for it!</Text>
                    </View>
                    <View style={{width: width, alignItems: "center"}}>
                        <SearchBar handleFilterToggle={handleFilterToggle} setSearch={setSearch} Search={Search} />
                    </View>
                    
                    <View style={{marginTop: 20}}>
                        {
                            loading === true ? (
                                <View 
                                style={{
                                    flex: 1,
                                    width: width,
                                    height: height,
                                    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                                    alignItems:"center",
                                    backgroundColor: "#fff",
                                    borderTopLeftRadius: 40,
                                    borderTopRightRadius: 40,
                                    zIndex: 5,
                                    paddingTop: 100,
                                }}>
                                    <Image source={require('../../assets/84.gif')} />
                                </View>
                            ) : (
                                <SecondHalfHome 
                                    listings={data} 
                                    navigation={navigation} 
                                    filterState={filterState}
                                    Search={Search}
                                />
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems:"center",
    },
    container1: {
        flex: 1,
        width: width,
        // height: height,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // alignItems:"center",
    },
    image: {
        marginLeft: -0.5,
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
    },
    pageHeader: {
        width: width,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
        // justifyContent: "center",
    },
    head1: {
        fontSize: 48, 
        fontWeight: "700",
        color: "#fff",
        // marginVertical: 10,
        textAlign: "center",
    },
    head2:{
        fontSize: 14, 
        fontWeight: "400",
        color: "#fff",
        // marginBottom: 10,
        textAlign: "center"
    }
})