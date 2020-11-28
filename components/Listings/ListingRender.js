import React, {useState, useEffect} from 'react'
import {View, Dimensions, Text, StyleSheet, FlatList} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import SingleList from './SingleList';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function ListingRender (props) {
  const [listingData, setListingData] = useState(props.data)
  let Filter = props.filterState; 
  useEffect(() => {
      if (Filter === "") {} 
      else {
        if (Filter === "Sale" || Filter === "Rent") {
          const data = props.data.filter((list) => list.type === Filter)
          setListingData(data)
        } else if (Filter === "Commercial" || Filter === "Residential") {
          const data = props.data.filter((list) => list.category === Filter)
          setListingData(data)
        } else if (Filter === "Size") {
          setListingData(props.data)
        } 
      }    
  },[props.filterState])

  useEffect(() => {
    if (props.Search === "") {
      setListingData(props.data)
    } else {
      const data = props.data.filter((list) => list.name.toLowerCase().includes(props.Search.toLowerCase()) || list.locality.toLowerCase().includes(props.Search.toLowerCase()) || list.price.toLowerCase().includes(props.Search.toLowerCase()))
      setListingData(data)
    }
  }, [props.Search])
  
    return (
        <View style={styles.container}>
            {/* listing example */}
            <FlatList
              data={listingData}
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
        paddingBottom: height / 6,
        alignItems: "center",
    },
})