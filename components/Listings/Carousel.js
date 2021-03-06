import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import CarouselItem from "./CarouselItem";

const { width, heigth } = Dimensions.get("window");
let flatList;

function infiniteScroll(dataList) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }

    this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
  }, 3000);
}

const Carousel = ({ data, page }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    // infiniteScroll(data);
  });

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          // ref={(flatList) => {
          //   this.flatList = flatList;
          // }}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} page={page} />;
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ],  {useNativeDriver: false} )}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.5, 1, 0.5],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={
                  page === "listing" ? 
                  {
                  opacity,
                  height: 5,
                  width: 5,
                  backgroundColor: "#fff",
                  marginLeft: 8,
                  marginTop: "-5%",
                  borderRadius: 5,
                } : {
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#fff",
                  marginLeft: 8,
                  marginTop: "-17%",
                  borderRadius: 5,
                }
              
              }
              />
            );
          })}
        </View>
      </View>
    );
  }

  console.log("Please provide Images");
  return null;
};

const styles = StyleSheet.create({
  dotView: { 
      flexDirection: "row", 
      justifyContent: "center",
      borderRadius: 20, 
    },
});

export default Carousel;
