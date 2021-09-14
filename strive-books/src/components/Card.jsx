import React, { Component, } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import { Card } from 'react-bootstrap'

import './Card.css';



class BookImage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "",
            img: "", // empty state
            key: 0,
            asin: "",
            showBox: false,
            showComments: false,
            // isLoading: true,
            // isError: false
        };
        this.handleBoxToggle = this.handleBoxToggle.bind(this)
        this.handleCommentToggle = this.handleCommentToggle.bind(this)

    }



    

    handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

    handleCommentToggle = () => this.setState({ showComments: !this.state.showComments });

    
  render() {
    return (
        <div onClick={this.props.onClick}> 
        <div key={this.props.idx} className="imgContainer" onMouseEnter={this.handleBoxToggle} onMouseLeave={this.handleBoxToggle} >
            <img src={this.props.img} alt={this.props.title.toString(10)} height={300} width={250} key={this.props.asin} class="image" />
            <div style={{padding: 8}} className={`overlay container${this.state.showBox ? "show" : ""}`}>
                <span>{this.props.title.toString(20)}</span>
            </div>
        </div>
    </div>)}
}

export default BookImage
