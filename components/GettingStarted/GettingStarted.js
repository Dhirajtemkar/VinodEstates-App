import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Button, ImageBackground, Image} from 'react-native'

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function GettingStarted ({route}) {
    // const {setToken} = route.params
    return (
        <ImageBackground 
            source={require("../../assets/getStarted2.jpg")}
            style={styles.bgImg}
            resizeMode="cover"
        >
            <View style={{
                flex:1, 
                backgroundColor: "rgba(0,0,0,0.8)",
                alignItems: "center",
                // justifyContent: 'center',
                paddingVertical: height / 4,
                }}
            >
            <View style={{
                alignItems: "center",
                justifyContent: 'center',
            }}>
            <Image 
                source={require("../../assets/icon2.png")}
                // style={{ marginLeft: "5%" }}
            />
            <Text style={{color: "#fff", fontSize: 48, fontWeight: "700", textAlign: "center", marginVertical: 20}}>Vinod Estates</Text>
            </View>
            <View>
            <Text>This is the GettingStarted page!</Text>
            <Button 
                onPress={() => {
                    route.params.setToken("Open")
                }} 
                title="Open App"
                color="#841584"
                accessibilityLabel="Learn more about this App"
            />
            </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center',
    },
    bgImg: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: "rgba(0,0,0,0.8)",
       
      },
})