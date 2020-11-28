import React, {useState} from 'react'
import {View, Dimensions, Text, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import FilterSVG from '../../assets/svg/Filter';
import SearchSVG from '../../assets/svg/Search';

const {width, height} = Dimensions.get("window");

export default function SearchBar (props) {

    return (
        <View style={{width: width - 40, height: height / 15.5, flexDirection: "row", backgroundColor: "#E8EBF0", borderRadius: 5}}>
            <View style={{marginHorizontal: 10, flex: 0, flexDirection: "row", justifyContent: "center", height: height / 15.5, alignItems: "center"}}>
                <SearchSVG color={"#898881"} />
            </View>
            <TextInput 
                placeholder={"Search properties..."}
                style={styles.Searchbar}
                onChangeText={(searchString) => {
                props.setSearch(searchString);
                // props.getSearchDone(searchString);
                }}
                value={props.Search}
            />
            <TouchableOpacity 
            onPress={() => {
                props.handleFilterToggle()
            }}
            style={{marginHorizontal: 10, flex: 0, flexDirection: "row", justifyContent: "center", height: height / 15.5, alignItems: "center"}}>
                <FilterSVG />
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    Searchbar: {
        // width: ,
        flex: 2,
        // height: "100%",
        height: height / 16.5,
        backgroundColor: "#E8EBF0",
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: "700",
        alignItems: "baseline",
        justifyContent: "flex-end",
        color: "#474643",
        paddingTop: 4,
        // elevation: 3,
        // shadowColor: "grey",
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
}) 