import React from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item, page }) => {
  return (
    <View style={page === "listing" ? styles.cardView : styles.cardView1}>
      <Image style={page === "listing" ? styles.image : styles.image1} source={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 40,
    height: height / 4.5,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'center',
  },
  cardView1: {
    flex: 1,
    width: width,
    height: height / 2,
    backgroundColor: "white",
    borderRadius: 40,
    alignItems: "center",
    // justifyContent: 'center',
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    // width: width,
    // height: height / 2.5,
    width: width - 40, 
    height: height / 4.5,
    borderRadius: 10,
  },
  image1: {
    // width: width,
    // height: height / 2.5,
    width: width * 1.2, 
    height: height / 2.2,
    borderRadius: 40,
  },
});

export default CarouselItem;
