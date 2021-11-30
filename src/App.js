import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error';
import Readme from './components/Readme';

// material ui
import AutoCompleteComponents from './components/MUIcomponents/AutoCompleteComponents'
import ButtonComponents from './components/MUIcomponents/Button'
import ButtonGroupComponents from './components/MUIcomponents/ButtonGroupComponents';


export default function App() {  

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/auto-complete" component={AutoCompleteComponents} />
                <Route exact path="/button" component={ButtonComponents} />
                <Route exact path="/button-group" component={ButtonGroupComponents} />

                <Route exact path="/about" component={About} />
                <Route exact path="/readme" component={Readme} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}
