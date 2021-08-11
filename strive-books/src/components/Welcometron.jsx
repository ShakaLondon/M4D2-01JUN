import { Component } from 'react'
import { Container , Row , Col, Jumbotron, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Myjumbotron extends Component {

    render(){
        return (
            <Jumbotron className="pt-5">
                <Container className="flex-col align-items-center">
                    <h1 className="flex-row text-warning jumboTitle">Welcome to our bookshop!</h1>
                    <p className="flex-row jumboSubText mx-auto text-center">
                        Its lovely to meet you!
                    </p>
                    <Button className="btn-warning jumboBtn py-3 px-5 my-2" href="#latestReleasesTop">Latest Releases</Button>

                </Container>
            </Jumbotron>
        )
    }
}

export default Myjumbotron