import {Component} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook } from '@fortawesome/free-brands-svg-icons'

class Myfooter extends Component {

    render() { 
        return (
            < >
 
            <Container fluid  id="footer" style={{backgroundColor:"black"}} className="p-3">
                <Container className="footer-li pt-3" id="footer">
            <Row >
                <div className="col-md-2" >
                    <div className="d-flex justify-content-between">
                        <a rel="noreferrer" target="_blank" href="https://facebook.com/netflix">
                            <FontAwesomeIcon icon={["fab", "facebook"]} className="fa-2x text-white"/>
                        </a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/netflix/">
                            <FontAwesomeIcon icon={["fab", "instagram"]} className="fa-2x text-white"/>
                        </a>
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/netflix">
                            <FontAwesomeIcon icon={["fab", "twitter"]} className="fa-2x text-white"/>
                        </a>
                        <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">
                            <FontAwesomeIcon icon={["fab", "youtube"]} className="fa-2x text-white"/>
                        </a>
                    </div>
                </div>
            </Row>
            <Row className="pt-3 mr-0 justify-content-center">
                <div className="col-md-3"  >
                    <nav>
                        <li className="py-1">
                            <a className="text-muted" href="#audioandsubtitles">
                                Audio and Subtitles
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#mediacenter">
                                Media Center
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#privacy">
                                Privacy
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#contactus">
                                Contact Us
                            </a>
                        </li>
                        <li className="py-1 mt-2">
                            <button className="btn btn-square btn-outline-secondary">Service Code</button>
                        </li>
                        <li className="py-1 mt-2">
                            <span className="text-muted">© 1997-2021 Netflix Inc</span>
                        </li>
                    </nav>
                </div>
                <Col className="col-md-3" >
                    <nav>
                        <li className="py-1">
                            <a className="text-muted" href="#audiodesciption">
                                Audio Description
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#investorrelations">
                                Investor Relations
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#legalnotices">
                                Legal Notices
                            </a>
                        </li>
                    </nav>
                </Col>
                <Col className="col-md-3" >
                    <nav>
                        <li className="py-1">
                            <a className="text-muted" href="#helpcenter">
                                Help Center
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#availablejobs">
                                Available Jobs
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#cookieprefs">
                                Cookie Preferences
                            </a>
                        </li>
                    </nav>
                </Col>
                <Col className="col-md-3" >
                    <nav>
                        <li className="py-1">
                            <a className="text-muted" href="#giftcards">
                                Gift Cards
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#termsofuse">
                                Terms Of Use
                            </a>
                        </li>
                        <li className="py-1">
                            <a className="text-muted" href="#coprorateinformation">
                                Corporate Information
                            </a>
                        </li>
                    </nav>
                </Col>
            </Row>
            </Container>
        </Container>
        </>
          );
    }
}
 
export default Myfooter ;