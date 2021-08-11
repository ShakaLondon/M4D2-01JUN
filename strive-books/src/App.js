import Mynav from "./components/Nav"
import Myfooter from "./components/Footer"
import Myjumbotron from "./components/Welcometron"
import fantasyBooks from "../src/data/fantasy.json"
import historyBooks from "../src/data/history.json"
import horrorBooks from "../src/data/horror.json"
import romanceBooks from "../src/data/romance.json"
import scifiBooks from "../src/data/scifi.json"
import { useWindowDimensions } from 'react-native';

import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faRocket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Carousel from "./components/fantasy-carousel2";
library.add(fab, faRocket, faSearch, faGoogle, faFacebook, faTwitter, faInstagram)


function App() {

  let windowWidth = useWindowDimensions().width

  console.log(windowWidth)

  let cardNum 

  windowWidth < 600 ? cardNum = 1
      : windowWidth < 768 ? cardNum = 2
      : windowWidth < 1064 ? cardNum = 3
      : cardNum = 4

  
  return (
    <div className="App">
      <Mynav/>
      <Myjumbotron/>
      <a id="latestReleasesTop"></a>
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carousel books={fantasyBooks} show={cardNum}/>
        <Carousel books={historyBooks} show={cardNum}/>
        <Carousel books={horrorBooks} show={cardNum}/>
        <Carousel books={romanceBooks} show={cardNum}/>
        <Carousel books={scifiBooks} show={cardNum}/>
      </div>
      <Myfooter/>
    </div>
  );
}

export default App;
