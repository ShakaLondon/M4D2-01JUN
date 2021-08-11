import React, { Component, } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import { Container } from 'react-bootstrap'

// import MyCardGroup from './Card.jsx'


class MyCardDeck extends Component {

    state = {
        // asin: "",
        // title: "",
        // img: "",
        // price: 0,
        // category: "",
        bookdata: [],
        isLoading: true,
        isError: false,
        dataFile: "",
    }

    // componentDidMount() {
    //     fetch('https://some-api.com/harry-potter')
    //     .then((response) => response.json())
    //     .then(booksList => {
    //         this.setState({ books: booksList });
    //     });
    // }

    

        
        componentDidMount() {
        // async () => {
        // categoryData.forEach(category => {
        const categoryData = [{fantasy: "./data/fantasy.json"}, {history: "./data/history.json"}, {horror: "./data/horror.json"}, {romance: "./data/romance.json"}, {scifi: "./data/scifi.json"}]

        categoryData.forEach(datafile => {
            // try {

                console.log(Object.values(datafile))

                const categoryLink = Object.values(datafile)[0]

                // const categoryName = Object.keys(datafile)[0]

                console.log(Object.values(datafile)[0])

                // console.log(this.props.name)

               

                fetch(`${categoryLink}`)
                    // headers : { 
                    //   'Content-Type': 'application/json',
                    //  }})
                    .then((response) => response.json())
                    .then(booksList => {
                        console.log(booksList)
                        this.setState({ books: booksList });
                    })
                    .catch(error => {
                        console.error('Error:', error);
                      });

                console.log(this.state.bookdata)







        })
        }
           
        render (){

            let bookJSON = this.state.bookdata

            console.log(bookJSON)

            if (bookJSON) {

        return (
            <Container className="categoryList">

            </Container>
        )
        }
    }


    
}

export default MyCardDeck

