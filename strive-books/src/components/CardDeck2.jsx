import React, { Component, } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
// import { Container } from 'react-bootstrap'

import MyCards from './Card2.jsx'

import { ScrollView, Animated, SafeAreaView, Dimensions } from "react"

// import MyCardGroup from './Card.jsx'

// const newAnim = new Animated.Value(0)

// const scrollX = React.useRef(newAnim).current;





class MyCDeck extends Component {

    

    // newAnim = new Animated.Value(0)

    constructor(props) {
        super(props);
        // newAnim = new Animated.Value(0)
        
        this.AnimValue = React.createRef();

      }

      scrollRef = (data) => {
        return data
    };

    

    state = {

        bookdata: [],
        isLoading: true,
        isError: false,
        dataFile: "",
        key: 0,
    }

    



    

        
        componentDidMount() {

                fetch(this.state.dataFile)
                    // headers : { 
                    //   'Content-Type': 'application/json',
                    //  }})
                    .then((response) => response.json())
                    .then(books => {
                        console.log(books)
                        const booksList = books.filter((item, x) => {
                            if (x<50) {
                            return item[x]
                        }
                        console.log(booksList)
                    });

                        this.setState({ bookdata: booksList });
                    })
                    .catch(error => {
                        console.error('Error:', error);
                      });

                console.log(this.state.bookdata)



        }
           
        render (){

            // const scrollX = React.useRef(new Animated.Value(0)).current
            let scrollX = this.scrollRef
            // const scrollX = React.createRef(new Animated.Value(0)).current;
            const ITEM_WIDTH = Dimensions.get("window").width - (OFFSET * 2)
            const OFFSET = 40

            

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <ScrollView
                horizontal={true}
                decelerationRate={"normal"}
                snapToInterval={ITEM_WIDTH}
                bounces={false}
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

                {this.state.bookdata.map((item, idx) => {

                return (

                            <MyCards scrollX={this.scrollRef} asin={item.asin} title={item.title} img={item.img} price={item.price} category={item.category} idx={idx}/>
                )}
                )}

            </ScrollView>
            </SafeAreaView>

        )}

    
}

export default MyCDeck

