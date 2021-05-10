import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Cabinet from '../AnketCabinet/Cabinet';
import Form from '../Form/Form'
import List from '../List/List';
import Home from '../Home/Home';
//import Error from '../Error/Error'
import { Provider } from 'react-redux';
import store from '../../redux/Store/Store.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <div className="App">
          <Switch>
        
          <Route exact path="/">
              <Home />
            </Route>

            <Route path="/form">
              <Form />
            </Route>

            <Route path="/list">
              <List />
            </Route>

            <Route path="/cabinet/:id">
              <Cabinet/>
            </Route>

            <Route path="*">
              {/* <Error /> */}
            </Route>

          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
