import React, { Component, } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
// import { Card } from 'react-bootstrap'
import { Animated, View, ImageBackground, Dimensions, } from "react"

import './Card.css';



// const scrollX = React.createRef(new Animated.Value(0)).current;





class MyCards extends Component {

    // constructor(props) {
    //     super(props);
    //     scrollX = React.createRef(new Animated.Value(0)).current;
    //   }

    constructor(props) {
      super(props);
      // newAnim = new Animated.Value(0)
      
      this.AnimValue = React.createRef();
    }

    defineScroll = () => {
      let scrollVal = this.AnimValue
      this.props.scrollX(scrollVal);
  };




    state = {
        // moviedata: {}, // empty state
        asin: {},
        title: "",
        img: "",
        price: "",
        category: "",
        showBox: false,
        idx: 0
        // isLoading: true,
        // isError: false
    }


  render() {
    // const scrollX = this.props.myRef
    this.AnimValue = new Animated.Value(0)
    const scrollX = this.AnimValue
    console.log(scrollX)
    const ITEM_WIDTH = Dimensions.get("window").width - (OFFSET * 2)
    const ITEM_HEIGHT = 200
    const OFFSET = 40
    const inputRange = [
        (this.state.idx - 1) * ITEM_WIDTH,
        this.state.idx * ITEM_WIDTH,
        (this.state.idx + 1) * ITEM_WIDTH,
    ]
    
    const translate = window.scrollX.interpolate({
        inputRange,
        outputRange: [0.85, 1, 0.85],
    })
    
    const opacity = window.scrollX.interpolate({
        inputRange,
        outputRange: [0.5, 1, 0.5],
    })
    return (
        <Animated.View
        style={{
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          marginLeft: this.state.idx === 0 ? OFFSET : undefined,
                marginRight: this.state.idx === 50 - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
        }} 
        scrollX={scrollX}
      >
        <ImageBackground
          source={this.state.img}
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
          }}
          imageStyle={{ borderRadius: 6}}
        />
      </Animated.View>)
  }
}

export default MyCards
