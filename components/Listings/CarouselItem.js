import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item} />
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
    borderRadius: 20,
  },
});

export default CarouselItem;
