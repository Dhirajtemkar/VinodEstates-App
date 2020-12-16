import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Linking, Platform, StatusBar, ImageBackground,Image, TouchableOpacity, ScrollView} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import CallSVG from '../../assets/svg/Call';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function Contact ({ navigation }) {
    const [call, setCall] = useState(false)
    const [book, setBook] = useState(false)
    const handleCallBtn = () => {
        setCall(!call)
        Linking.openURL(`tel:8767809709`);
    }

    const handleListingRoute = () => {
        navigation.navigate('ListingScreen', {
            screen: 'Listings',
            params: {
                // listing: listing,
                navigation: navigation,
                page: "Contact",
                homeFilter: "",
            },
          });
    }
    return (
    <ImageBackground source={require('../../assets/Home/homeBackground.png')} style={styles.image}>
        <ScrollView>
            <View style={styles.container}>
                <ScreenHeader />
                <View style={{width: width, alignItems: "center"}}>
                    <Image source={require('../../assets/Contact/dad.png')} style={styles.man}/> 
                    <Text style={styles.name}>Vinod Temkar</Text>
                </View>
                <TouchableOpacity style = {styles.topBtn} onPress={() => handleListingRoute()}>
                    <Text style = {{color: '#00509D',fontSize:20,fontWeight:'bold'}} >Search Properties</Text>
                </TouchableOpacity> 

                <View style={styles.desc}>
                    <Text style = {{color: 'black',fontSize:20,fontWeight:'bold',marginTop:20,marginLeft:30,marginRight:30}}>Description</Text>
                    <Text style = {{color: 'black',fontSize:14,marginTop:20,marginLeft:30,marginRight:35, textAlign: "justify"}}>
                    Get a world class service of finding a perfect RealEstate according to your choice.
                    Browse through Properties on the listings page and narrow down your search with the help of filters.
                    Search for the property you like and get a personalized meeting, to know more about the property in detail or even visit it in person.
                    </Text>
                    <View style={{width: width, alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity style={styles.bookBtn} onPress={() => handleCallBtn()}>
                            <View style={{flex: 0.5, alignItems: "center", justifyContent: "center"}}>
                                <CallSVG color='white' />
                            </View>
                            <Text style={styles.bookBtnTxt}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>  
            </View>
        </ScrollView>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        // height: height,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    image: {
        marginLeft: -0.5,
      
        resizeMode: "cover",
        // justifyContent: "center"
    },
    man: {
        width: width / 2.5,
        height: width / 2.5,
        borderRadius: width / 2,
        borderWidth: 3,
        paddingLeft: 40,
        paddingTop: 40,
    },
    name: {
        fontSize: 37,
        color: '#FFFFFF',
        textAlign:'center',
        fontWeight:'bold',
       marginTop:5,
    //    marginLeft:50,
    //    marginRight:55
      },
      topBtn: {
        backgroundColor: '#fff', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop:20,
        marginLeft:30,
        marginRight:30, 
        borderRadius: 25,
        paddingBottom:12,
        paddingTop:12
    },
      desc: {
        marginTop:30,
        backgroundColor:'#FFFFFF',
        // paddingBottom: width / 3,
        height: width, 
      },
      bookBtn: {
        flex: 1.5, 
        alignItems: 'center', 
        justifyContent: "center", 
        height: height / 20,
        backgroundColor: "#00509D",
        width: width * 0.8,
        borderRadius: 40,
        flexDirection:'row',
        // marginLeft:'19%',
        marginTop: "10%",
        position: "absolute",
        bottom: -100,
      },
      bookBtnTxt: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 18,
        // padding:'5%',
        flex: 1.5,
        paddingLeft: 60,
        justifyContent: "center"
        // textAlign: "center",

      }
   
})