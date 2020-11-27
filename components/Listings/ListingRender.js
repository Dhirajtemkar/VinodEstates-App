import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, FlatList} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import SingleList from './SingleList';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function ListingRender (props) {

    return (
        <View style={styles.container}>
            {/* listing example */}
            <FlatList
              data={props.data}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              renderItem={({ item, index }) => {
                return (
                  <SingleList key={index} listing={item} navigation={props.navigation}/>
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
        backgroundColor: "#fff",
        // height: height, 
        // elevation: 8,
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        paddingTop: 20,
        paddingBottom: height / 10,
        alignItems: "center",
    },
})