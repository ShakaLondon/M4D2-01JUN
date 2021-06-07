import { Component } from 'react'
import { Container , Row , Col, Jumbotron } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Myjumbotron extends Component {

    render(){
        return (
            <Jumbotron fluid>
                <Container>
                    <h1 className="text-warning jumboTitle">Welcome to our bookshop!</h1>
                    <p className="jumboSubText">
                        Its nice to meet you!
                    </p>
                </Container>
            </Jumbotron>
        )
    }
}

export default Myjumbotron