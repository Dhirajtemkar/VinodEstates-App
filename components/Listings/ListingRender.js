import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, FlatList} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import SingleList from './SingleList';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function ListingRender (props) {

    return (
        <View style={styles.container}>
            <View style={{width: width - 40, marginVertical: 20, marginLeft: 10}}>
                <Text style={{color: "#C4C4C4", fontSize: 16, fontWeight: "600"}}>Listings</Text>
            </View>
            {/* listing example */}
            <FlatList
              data={props.data}
              renderItem={({ item, index }) => {
                return (
                  <SingleList listing={item} navigation={props.navigation}/>
                );
              }}
              numColumns={1}
            /> 

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width, 
        // height: height + 20, 
        backgroundColor: "#fff", 
        elevation: 8,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: "center",
    },
})