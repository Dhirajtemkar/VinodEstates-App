import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import CallSVG from '../../assets/svg/Call';

const {width, height} = Dimensions.get("window");

export default function BottomActions(props) {
    const [call, setCall] = useState(false)
    const [book, setBook] = useState(false)
    const handleCallBtn = () => {
        setCall(!call)
        Linking.openURL(`tel:8767809709`);
    }
    const handleBookBtn = () => {
        setBook(!book)
        props.navigation.navigate('ContactScreen', {
          screen: 'Contact',
          params: {
              // listing: listing,
              navigation: props.navigation,
              page: "listings",
          },
        });
    }
    return (
        <View style={styles.container}>
          <TouchableOpacity style={ call ? styles.callBtn1 : styles.callBtn} onPress={() => handleCallBtn()}>
            <CallSVG color={ call ? "#fff" : "#00509D"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookBtn} onPress={() => handleBookBtn()}>
            <Text style={styles.bookBtnTxt}>Book a Tour</Text>
          </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute", 
        bottom: 10,
        width: width, 
        height: height / 13, 
        paddingVertical: 5,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        zIndex: 10,
        marginTop: -(height / 13),
      },
      callBtn: {
        flex: 0, 
        alignItems: 'center', 
        justifyContent: "center", 
        height: "100%",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        marginRight: 10,
        borderWidth: 2,
        borderColor: "rgba(0, 80, 157, 1)",
        borderRadius: 10,
      },
      callBtnTxt: {
        color: "#00509D",
        fontWeight: "700",
        fontSize: 18,
      },
      callBtn1: {
        flex: 0, 
        alignItems: 'center', 
        justifyContent: "center", 
        height: "100%",
        paddingHorizontal: 15,
        backgroundColor: "rgba(0, 80, 157, 1)",
        marginRight: 10,
        borderWidth: 2,
        borderColor: "rgba(0, 80, 157, 1)",
        borderRadius: 10,
      },
      callBtnTxt1: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 18,
      },
      bookBtn: {
        flex: 1.5, 
        alignItems: 'center', 
        justifyContent: "center", 
        height: "100%",
        backgroundColor: "#00509D",
        // borderWidth: 0.5,
        // borderColor: "#00509D",
        borderRadius: 10,
      },
      bookBtnTxt: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 18,
      },
      bookBtn1: {
        flex: 1.5, 
        alignItems: 'center', 
        justifyContent: "center", 
        height: "100%",
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#00509D",
        borderRadius: 10,
      },
      bookBtnTxt1: {
        color: "#00509D",
        fontWeight: "700",
        fontSize: 18,
      },
})