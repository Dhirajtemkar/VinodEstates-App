import React, {useState, useRef} from 'react'
import {View, Dimensions, Text, StyleSheet, ImageBackground, Platform, StatusBar, ScrollView} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import SearchBar from '../Search/SearchBar';
import SecondHalfHome from './SecondHalf';
import { listingData } from '../../data';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function Home ({navigation, route}) {
    console.log(route)
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
                        <SecondHalfHome 
                        listings={data} 
                        navigation={navigation} 
                        filterState={filterState}
                        Search={Search}
                        />
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