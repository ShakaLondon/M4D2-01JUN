import Mynav from "./components/Nav"
import Myfooter from "./components/Footer"
import Myjumbotron from "./components/Welcometron"

import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faRocket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
library.add(fab, faRocket, faSearch, faGoogle, faFacebook, faTwitter, faInstagram)


function App() {
  return (
    <div className="App">
      <Mynav/>
      <Myjumbotron/>
      <Myfooter/>
    </div>
  );
}

export default App;
