import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error';
import Readme from './components/Readme';

// material ui
import HelloWorld from './components/MUIcomponents/HelloWorld'

export default function App() {  

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/hello-world" component={HelloWorld} />

                <Route exact path="/about" component={About} />
                <Route exact path="/readme" component={Readme} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}
