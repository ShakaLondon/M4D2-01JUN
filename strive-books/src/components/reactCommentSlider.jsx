import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Button } from 'react-bootstrap'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class SimpleSlider extends Component {

  constructor(props) {
    super(props);
    this.state = { 
    commentArray: [] };
}


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    

    let comments = this.props.commentArray
    console.log(comments, "here")
    let commentsto6 = comments.splice(0,6)

    return (
      <div>
        <h3 className="pb-2"> Reviews </h3>
        <Slider {...settings}>
        {commentsto6.map((item, idx) => {
                            // console.log(item)
                            // const ASIN = item.asin
                            let rating = item.rate
                            // let star = `<FontAwesomeIcon icon={faStar} />`
                            // let ratingstar = rating * star
                            // let ratingArray = Array(rating).fill(`<FontAwesomeIcon icon={faStar} />`)


                            return (
                              <div key={idx}>
                              <Card >
                                <Card.Body >
                                    <Card.Title>{(rating = 0) ? `` : 
                                                 (rating = 1) ? <div><FontAwesomeIcon icon={faStar} /></div> :
                                                 (rating = 2) ? <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div> :
                                                 (rating = 3) ? <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div> :
                                                 (rating = 4) ? <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div> :
                                                 <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div> }</Card.Title>
                                    <Card.Text>
                                    {item.comment}
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                                </Card>
                              </div>
                               ) 
                        })}
          
        </Slider>
      </div>
    );
 
  }
}