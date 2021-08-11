import React, { Component, } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import { Card } from 'react-bootstrap'

import './Card.css';



class BookImage extends Component {



    state = {
        title: "",
        img: "", // empty state
        key: 0,
        asin: "",
        showBox: false,
        // isLoading: true,
        // isError: false
    }

    handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

    
  render() {
    return (
        <div> 
        <div key={this.props.idx} className="imgContainer" onMouseEnter={this.handleBoxToggle} onMouseLeave={this.handleBoxToggle}>
            <img src={this.props.img} alt={this.props.title.toString(10)} height={300} width={250} key={this.props.asin} class="image" />
            <div style={{padding: 8}} class={`overlay container${this.state.showBox ? "show" : ""}`}>
                <span>{this.props.title.toString(20)}</span>
            </div>
        </div>
    </div>)}
}

export default BookImage
