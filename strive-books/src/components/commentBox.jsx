import React, { Component, } from 'react';

import { Container, Row, Col, InputGroup, FormControl, Button, Form, Card } from 'react-bootstrap'

import SimpleSlider from "../components/reactCommentSlider"



class MyCommentBox extends Component {

    constructor(props) {
        super(props);
        this.state = { reviews: { 
          comment: "",
          rate: 0,
          elementId: "" },
        showComments: false,
        bookID: "",
        commentArray: [] };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeCheck = this.handleChangeCheck.bind(this)
        // this.handleBookID = this.handleBookID.bind(this)

    }
        // SET STATES FOR JSON BODY AND FORM INPUT
    
    

        
        componentDidMount = async (bookID) => {
                // e.preventDefault();
               
            
                console.log(this.state.reviews)
                console.log(this.props.bookID)

                let bookASIN = this.props.bookID
                console.log(bookASIN)

                this.setState({reviews: {...this.state.reviews, elementId: bookASIN.toString()}});
                // console.log(this.state.form)
            
                try {
                  const url = "https://striveschool-api.herokuapp.com/api/comments/"
                  let response = await fetch(`${url}${this.props.bookID}`, {
                      method: 'GET',
                      headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzEzMTg0NzIsImV4cCI6MTYzMjUyODA3Mn0.OY413ySA6pXY0DclX0JgL8z6RwyBTLj8A8NtangmCVs'
                    }
                      
                  })
                  console.log(response.ok)
                  let newComments = await response.json()
                  console.log(newComments)
                  console.log(this.state.reviews)
                   // the ok property from the fetch() is going to tell you if the operation was successful

                   if (newComments) {

                    this.setState({
                        commentArray: newComments})
                    
                  } else {
                      // this is going to catch a server problem
                      // i.e: server is down, db has a problem
                    //   alert('Houston we had a problem, try again!')
                  }

                   
              } catch (error) {
                  // if we fall here it means we don't have connection
                  // or maybe the url is not quite right
                  console.log(error)
              } 
        }

        componentDidUpdate = async (e) => {
            // e.preventDefault();
            
           
            console.log(this.state.reviews)
            console.log(this.state.bookID)

            // let bookASIN = this.props.bookID
            // console.log(bookASIN)

            // this.setState({reviews: {...this.state.reviews, elementId: bookASIN.toString()}});
            // console.log(this.state.form)
        
            try {
              const url = "https://striveschool-api.herokuapp.com/api/comments/"
              let response = await fetch(`${url}${this.state.bookID}`, {
                  method: 'GET',
                  headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzEzMTg0NzIsImV4cCI6MTYzMjUyODA3Mn0.OY413ySA6pXY0DclX0JgL8z6RwyBTLj8A8NtangmCVs'
                }
                  
              })
              console.log(response.ok)
              let newComments = await response.json()
              console.log(newComments)
              console.log(this.state.reviews)
               // the ok property from the fetch() is going to tell you if the operation was successful

               if (newComments) {

                this.setState({
                    commentArray: newComments})
                
              } else {
                  // this is going to catch a server problem
                  // i.e: server is down, db has a problem
                //   alert('Houston we had a problem, try again!')
              }

               
          } catch (error) {
              // if we fall here it means we don't have connection
              // or maybe the url is not quite right
              console.log(error)
          } 
    }
        
        

        handleChange(event) {
            event.preventDefault()
            
            this.setState({reviews: {...this.state.reviews, comment: event.target.value}}, function () {
                console.log(this.state.reviews);
              });
            // console.log(this.state.reviews)
            
          }

          handleChangeCheck(event) {
            // event.preventDefault()
            
              console.log(event.target.value)
              
            this.setState({reviews: {...this.state.reviews, rate: event.target.value}});

            //   this.setState({reviews: {...this.state.reviews, elementId: this.state.bookID}}, function () {
            //     console.log(this.state.reviews);
            //   });
            // console.log(this.state.reviews.rate)
            
          }

        //   handleBookID() {
        //     this.setState({reviews: {elementId: this.state.bookID}});
        //   }

        
        
            // HANDLE CHANGE STATE FOR TEXT INPUT
        handleSubmit = async (e) => {
            e.preventDefault();
           
        
            console.log(this.state.reviews)
            // console.log(this.state.form)
        
            try {
              const url = "https://striveschool-api.herokuapp.com/api/comments"
              let response = await fetch(`${url}`, {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwZGZiYmRjMTQ1ODAwMTVlNGFlZTUiLCJpYXQiOjE2MzEzMTg0NzIsImV4cCI6MTYzMjUyODA3Mn0.OY413ySA6pXY0DclX0JgL8z6RwyBTLj8A8NtangmCVs'
                },
                  body: JSON.stringify(this.state.reviews)
                  
              })
              console.log(response.ok)
              let newReview = await response.json()
              console.log(newReview)
               // the ok property from the fetch() is going to tell you if the operation was successfull
              if (response.ok) {
        
                  this.setState({
                    reviews: { 
                        comment: "",
                        rate: "",
                        elementId: "" },
                  })
                  alert('Success! Your blog has been posted: ' + this.state.reviews.elementId);
              } else {
                  // this is going to catch a server problem
                  // i.e: server is down, db has a problem
                  alert('Houston we had a problem, try again!')
              }
          } catch (error) {
              // if we fall here it means we don't have connection
              // or maybe the url is not quite right
              console.log(error)
          } 
    }

        
           
        render (){
            console.log(this.state.commentArray)

            const comments = this.state.commentArray
            return(

                <Container className="py-5 border-top border-bottom border-dark px-5">
                    <Row style={{ borderWidth: 2 }}>
                        <Col sm={6} md={6} >
                        {/* <h4>Add Comment</h4> */}
                        <Form>

                        <div key={`inline-radio`} className="mb-3" onClick={this.handleChangeCheck}>
                            <Form.Check
                                inline
                                label="0"
                                name="rate"
                                value="0"
                                type="radio"
                                id={`inline-radio-1`}
                                onClick={this.handleChangeCheck}
                            />
                            <Form.Check
                                inline
                                label="1"
                                value="1"
                                name="rate"
                                type="radio"
                                id={`inline-radio-2`}
                                onClick={this.handleChangeCheck}
                            />
                            <Form.Check
                                inline
                                label="2"
                                value="2"
                                name="rate"
                                type="radio"
                                id={`inline-radio-3`}
                                onClick={this.handleChangeCheck}
                            />
                            <Form.Check
                                inline
                                label="3"
                                value="3"
                                name="rate"
                                type="radio"
                                id={`inline-radio-3`}
                                onClick={this.handleChangeCheck}
                            />
                            <Form.Check
                                inline
                                label="4"
                                value="4"
                                name="rate"
                                type="radio"
                                id={`inline-radio-3`}
                                onClick={this.handleChangeCheck}
                            />
                            <Form.Check
                                inline
                                label="5"
                                value="5"
                                name="rate"
                                type="radio"
                                id={`inline-radio-3`}
                                onClick={this.handleChangeCheck}
                            />
                            </div>

                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write a comment</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={this.handleChange} name="comment" value={this.state.reviews.comment}/>
                            </Form.Group>

                            <Button variant="dark" type="submit" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        {/* <div className="d-inline-flex container-fluid px-0 justify-content-between" onChange={this.handleChange}>

                        <InputGroup className="justify-content-center">
                            <InputGroup.Text id="reviewHead0">0</InputGroup.Text>
                            <InputGroup.Radio value="0" name="rate" aria-label="Radio button for rating"/>
                        </InputGroup>
                        <InputGroup className="justify-content-center">
                            <InputGroup.Text id="reviewHead1">1</InputGroup.Text>
                            <InputGroup.Radio value="1" name="rate" aria-label="Radio button for rating"/>
                        </InputGroup>
                        <InputGroup className="justify-content-center">
                            <InputGroup.Text id="reviewHead2">2</InputGroup.Text>
                            <InputGroup.Radio value="2" name="rate" aria-label="Radio button for rating"/>
                        </InputGroup>
                        <InputGroup className="justify-content-center">
                            <InputGroup.Text id="reviewHead3">3</InputGroup.Text>
                            <InputGroup.Radio value="3" name="rate" aria-label="Radio button for rating"/>
                        </InputGroup>
                        <InputGroup className="justify-content-center">
                            <InputGroup.Text id="reviewHead4">4</InputGroup.Text>
                            <InputGroup.Radio value="4" name="rate" aria-label="Radio button for rating"/>
                        </InputGroup>
                        <InputGroup className="justify-content-center">
                            <InputGroup.Text id="reviewHead5">5</InputGroup.Text>
                            <InputGroup.Radio value="5" name="rate" aria-label="Radio button for rating"/>
                        </InputGroup>
                        </div> */}
                        {/* <div >
                        <InputGroup className="py-3">
                            <InputGroup.Text>Add a Review!</InputGroup.Text>
                            <FormControl as="textarea" rows={4} type="text" aria-label="With textarea" value={this.state.reviews.comment} onChange={this.handleChange} name="comment"/>
                        </InputGroup>
                        <Button variant="dark" className="text-left" type="submit" value="submit">Add Review</Button>
                        </div> */}
                        </Form>
                        </Col>
                        <Col sm={6} md={6} >
                        {comments.length > 0? <SimpleSlider commentArray={this.state.commentArray}></SimpleSlider> :  <div>
                              <Card >
                                <Card.Body >
                                    
                                    <Card.Text>
                                    There are no comments to show! 
                                    </Card.Text>
                                    
                                </Card.Body>
                                </Card>
                              </div>}

                        </Col>
                    </Row>
                </Container>

            )
    }

}


    


export default MyCommentBox

