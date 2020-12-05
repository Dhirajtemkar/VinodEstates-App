import React, {useState, useEffect} from 'react'
import {View, Dimensions, Text, StyleSheet, Animated, FlatList, StatusBar, TouchableOpacity} from 'react-native'
import BuySVG from '../../assets/svg/Buy';
import ComGettingStartedSVG from '../../assets/svg/ComGettingStarted';
import RentSVG from '../../assets/svg/Rent';
import ResGettingStartedSVG from '../../assets/svg/ResGettingStarted';
import ListingRender from '../Listings/ListingRender';
import SingleList from '../Listings/SingleList';
import HomeListings from './HomeListings';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function SecondHalfHome ({navigation, listings, Search}) {
    const [appliedFilter, setAppliedFilter] = useState("")
    const [colorApplied, setColorApplied] = useState("#fff")
    const [filterIndicator, setFilterIndicator] = useState("")

    const SlideInUp = new Animated.Value(0);

    const _start = () => {
      return Animated.parallel([
        Animated.timing(SlideInUp, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }),
      ]).start();
    };
    useEffect(() => {
      _start()
    }, [listingData])

    const handleSearchFilter = (data) => {
        if (appliedFilter === data) {
            setAppliedFilter("")
            navigation.navigate('ListingScreen', {
                screen: 'Listings',
                params: {
                    // listing: listing,
                    navigation: navigation,
                    page: "home",
                    homeFilter: data,
                },
              });
        } else {
            setAppliedFilter("")
            navigation.navigate('ListingScreen', {
                screen: 'Listings',
                params: {
                    // listing: listing,
                    navigation: navigation,
                    page: "home",
                    homeFilter: data,
                },
              });
        }
    }
    
    const [listingData, setListingData] = useState(listings)
    useEffect(() => {
        if (Search === "") {
          setListingData(listings)
        } else {
          const data = listings.filter((list) => list.name.toLowerCase().includes(Search.toLowerCase()) || list.locality.toLowerCase().includes(Search.toLowerCase()) || list.price.toLowerCase().includes(Search.toLowerCase()))
          setListingData(data)
          setAppliedFilter(Search)
        }
      }, [Search])
    let Filter = appliedFilter; 
    useEffect(() => {
        if (Filter === "") {
            setListingData(listings)
        } 
        else {
          if (Filter === "Sale" || Filter === "Rent") {
            const data = listings.filter((list) => list.type === Filter)
            setListingData(data)
          } else if (Filter === "Commercial" || Filter === "Residential") {
            const data = listings.filter((list) => list.category === Filter)
            setListingData(data)
          } else if (Filter === "Size") {
            setListingData(listings)
          } 
        }    
    },[appliedFilter])

    return (
        <View style={styles.container}>
            {
                appliedFilter === "" ? (
                    <View> 
                    <View style={{
                        alignItems: "center",
                        width: width,
                        // paddingHorizontal: 20,
                        marginTop: 40,
                    }}> 
                        <Text style={{fontSize: 24, fontWeight: '700', color: "#474643"}}>What are you looking for?</Text>
                        {/*this is the filter area*/}
                        <View style={{marginVertical: 20}}>
                            <View style={styles.filterRow}>
                                <TouchableOpacity style={appliedFilter === "Residential" ? styles.filterBtn1 : styles.filterBtn} onPress={() => handleSearchFilter("Residential")}>
                                    <ResGettingStartedSVG page={"home"} color={appliedFilter === "Residential" ? "rgba(0, 80, 157, 0.97)" : "#fff"}/>
                                    <Text style={appliedFilter === "Residential" ? {fontWeight: "700", color: "rgba(0, 80, 157, 0.97)"} : {fontWeight: "700", color: "#fff"}}>Residiantial</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={appliedFilter === "Commercial" ? styles.filterBtn1 : styles.filterBtn} onPress={() => handleSearchFilter("Commercial")}>
                                    <ComGettingStartedSVG page={"home"} color={appliedFilter === "Commercial" ? "rgba(0, 80, 157, 0.97)" : "#fff"}/>
                                    <Text style={appliedFilter === "Commercial" ? {fontWeight: "700", color: "rgba(0, 80, 157, 0.97)"} : {fontWeight: "700", color: "#fff"}}>Commercial</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.filterRow}>
                                <TouchableOpacity style={appliedFilter === "Sale" ? styles.filterBtn1 : styles.filterBtn} onPress={() => handleSearchFilter("Sale")}>
                                    <BuySVG page={"home"} color={appliedFilter === "Sale" ? "rgba(0, 80, 157, 0.97)" : "#fff"}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={appliedFilter === "Rent" ? styles.filterBtn1 : styles.filterBtn} onPress={() => handleSearchFilter("Rent")}>
                                    <RentSVG page={"home"} color={appliedFilter === "Rent" ? "rgba(0, 80, 157, 0.97)" : "#fff"}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{width: width, marginBottom: 20}}>
                    <Text style={{marginVertical: 10, fontSize: 18, fontWeight: "700", fontStyle: "bold",color: "#474643", marginLeft: 40}}>Popular Properties</Text>
                    <FlatList
                    data={listingData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                        return (
                        
                        <HomeListings
                        key={index}
                        listing={item} 
                        navigation={navigation}
                        />
                        
                        );
                    }}
                    // numColumns={1}
                    /> 
                        
                    </View>
                    </View>
                ) : (
                    <View 
                    style={{
                        alignItems: "center",
                        width: width,
                        // paddingHorizontal: 20,
                        marginVertical: 40,
                    }}>
                    <View style={{marginLeft: 40}}>
                        <View 
                        style={{
                            paddingHorizontal: 20, 
                            paddingVertical: 5,
                            borderRadius: 20,
                            backgroundColor: "rgba(0, 80, 157, 0.97)",
                            alignItems: 'center',
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                        >
                            <Text
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            maxLength={2}
                            style={{color: "#fff",}}
                            >{appliedFilter}
                            </Text>
                            <TouchableOpacity onPress={() => setAppliedFilter("")} style={{alignItems: 'center', justifyContent: 'center',}}><Text style={{color: "#fff", fontWeight: "700", textAlign: "center"}}> x </Text></TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                    data={listingData}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                      return (
                        <Animated.View 
                        style={{
                          transform: [
                              {
                              translateY: SlideInUp.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [5 * (index + 1), -((index + 1) * 10)]
                              })
                              }
                          ],
                          marginTop: 20,
                          }}
                        >
                        <SingleList key={index} listing={item} navigation={navigation}/>
                        </Animated.View>
                      );
                    }}
                    numColumns={1}
                  /> 
                    </View>
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        // height: height,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems:"center",
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: 5,
    },
   filterRow: {
       flexDirection: "row",
       marginVertical: 20,
       justifyContent: "space-around",
       width: width,
       paddingHorizontal: 20,
    },
    filterBtn: {
        width: width / 2.8,
        height: width / 2.8,
        backgroundColor: "rgba(0, 80, 157, 0.97)",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderRadius: 10,
    },
    filterBtn1: {
        width: width / 2.8,
        height: width / 2.8,
        backgroundColor: "#E8EBF0",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderRadius: 10,
    },
    fadingContainer: {
        paddingVertical: 10,
        // paddingHorizontal: 25,
        // backgroundColor: "lightseagreen"
      },
})