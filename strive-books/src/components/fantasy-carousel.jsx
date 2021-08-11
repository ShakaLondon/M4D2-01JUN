import React, { Component } from "react"
import {
  ScrollView,
  Animated,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native"






const BookList = ({books}) => {

console.log(books)

const OFFSET = 40
const ITEM_WIDTHREF = Dimensions.get("window").width - (OFFSET * 2)
const WINDOW_DIMEN = Dimensions.get("window").width
const ITEM_HEIGHT = 200
// const ITEM_WIDTH = "100px"

let ITEM_WIDTH

WINDOW_DIMEN > 1000?  ITEM_WIDTH = ((Dimensions.get("window").width)/5) - (OFFSET * 2)
        : WINDOW_DIMEN > 800? ITEM_WIDTH = ((Dimensions.get("window").width)/4) - (OFFSET * 2)
        : WINDOW_DIMEN > 600? ITEM_WIDTH = ((Dimensions.get("window").width)/3) - (OFFSET * 2)
        : ITEM_WIDTH = ((Dimensions.get("window").width)/2) - (OFFSET * 2)


  

const scrollX = React.useRef(new Animated.Value(0)).current



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView
        horizontal={true}
        decelerationRate={"normal"}
        snapToInterval={ITEM_WIDTH}
        style={{ marginTop: 40, paddingHorizontal: 0 }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={12}
      >
        {books.map((item, idx) => {
          const inputRange = [
            (idx - 1) * ITEM_WIDTHREF,
            idx * ITEM_WIDTHREF,
            (idx + 1) * ITEM_WIDTHREF,
          ]

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          })

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === books.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
              }}
            >
              <ImageBackground
                source={item.img}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 6}}
              >
                  <Text>{item.title}</Text>
              </ImageBackground>
            </Animated.View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookList