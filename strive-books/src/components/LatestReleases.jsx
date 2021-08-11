import React, { Component, } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import { Container } from 'react-bootstrap'

import MyCDeck from './CardDeck2.jsx'

class MyMainBooks extends Component {

    state = {
        categoryLinks: [],
    }

    componentDidMount() {
        const categoryData = {fantasy: "./data/fantasy.json", history: "./data/history.json", horror: "./data/horror.json", romance: "./data/romance.json", scifi: "./data/scifi.json"}
        const categoryArray = Object.values(categoryData)

        console.log (categoryArray)

        this.setState({ categoryLinks: categoryArray })
    }

    render() {

        const categoryArray = this.state.categoryLinks
        console.log(categoryArray)

      return (
        <Container>{
            
        categoryArray.map((category, idx) => {
        console.log(category, idx)
            return <MyCDeck key={idx} dataFile={category}></MyCDeck>
        }
        )}  
        </Container>
      );
    }
  }

  export default MyMainBooks
  