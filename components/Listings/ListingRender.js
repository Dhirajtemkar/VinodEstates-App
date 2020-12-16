import React, {useState, useEffect} from 'react'
import {View, Dimensions, Text, StyleSheet, FlatList, Animated} from 'react-native'
import ScreenHeader from '../Header/ScreenHeader';
import SingleList from './SingleList';

// dimensions of the screen
const {width, height} = Dimensions.get("window");

export default function ListingRender (props) {
  const [listingData, setListingData] = useState(props.data)
  let Filter = props.filterState; 
  const SlideInUp = new Animated.Value(0);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    // setTimeout(()=>{
    //   setIsLoading(false)
    //  }, 1500)
    if(props.routedPage === "filter") {
      let data = props.data
      // console.log(props.filterScreen)
      const propType = props.filterScreen.propType
      const bedType = props.filterScreen.bedType
      const furnishType = props.filterScreen.furnishType
        // data = data.filter((l) => l.bedrooms === parseInt(bedType))
        console.log(parseInt(bedType))

      if (furnishType !== "Any") {
        if(furnishType === "Furnished") {
          data = data.filter((l) => l.furnishment === true)
        } else if (furnishType === "Un-Furnished") {
          data = data.filter((l) => l.furnishment === false)
        }
      }

      // if (bedType !== "Any") {
      //   if (propType !== "") {
      //     if (propType === "Sale" || propType === "Rent") {
      //       data = data.filter((list) => list.type === propType && list.bedrooms === parseInt(bedType))
      //       console.log(data)
      //     } else if (propType === "Commercial" || propType === "Residential") {
      //       if (propType === "Commercial") {
      //         data = data.filter((list) => list.category === propType)
      //       } else {
      //         data = data.filter((list) => list.category === propType && list.bedrooms === parseInt(bedType))
      //       }
      //     } else if (propType === "Size") {
      //       data = props.data
      //     }
      //     props.setFilterState(propType)
      //     props.setFilterOn(true)
      //   }

      //   setListingData(data)
      //   } 
      // } else {
        if (propType !== "") {
          if (propType === "Sale" || propType === "Rent") {
            data = data.filter((list) => list.type === propType)
            console.log(data)
          } else if (propType === "Commercial" || propType === "Residential") {
            data = data.filter((list) => list.category === propType)
          } else if (propType === "Size") {
            data = data.sort((a, b) => a.sizeInSqft < b.sizeInSqft)
          }
          props.setFilterState(propType)
          props.setFilterOn(true)
        }   

        setListingData(data)
      }

  }, [props.route])
  useEffect(() => {
    let data = props.data
    if (Filter === "") {} 
    else {
      if (Filter === "Sale" || Filter === "Rent") {
        data = props.data.filter((list) => list.type === Filter)
        setListingData(data)
      } else if (Filter === "Commercial" || Filter === "Residential") {
        data = props.data.filter((list) => list.category === Filter)
        setListingData(data)
      } else if (Filter === "Size") {
        data = data.sort((a, b) => a.sizeInSqft < b.sizeInSqft)
        setListingData(data)
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
                  <SingleList key={index} listing={item} navigation={props.navigation}/>
                  </Animated.View>
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
        // paddingTop: 40,
        paddingBottom: height / 6,
        alignItems: "center",
    },
})


// if (isLoading === true) {
//   return (<View style={{
//     width: width - 37,
//     height: height / 3,
//     padding: 3,
//     borderRadius: 20,
//     backgroundColor: "#E1E9EE",
//     // marginVertical: 7,
//     alignItems: "center",
//   }}>
//     <View style={{
//       width: width - 40, 
//       height: height / 4.5, 
//       alignItems: 'center', 
//       borderRadius: 20,

//     }}></View>
//     <View style={{
//       padding: 10
//     }}>
//       <View style={{width: width - 60, height: 15, borderRadius: 5, backgroundColor: "#F2F8FC"}}></View>
//       <View style={{width: width - 60, height: 15, borderRadius: 5, backgroundColor: "#F2F8FC"}}></View>
//       <View style={{width: width - 60, height: 15, borderRadius: 5, backgroundColor: "#F2F8FC"}}></View>
//     </View>
//   </View>)
// } else { 
// }
