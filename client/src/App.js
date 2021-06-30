import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
                <Home/>
          </Route>
          {/* <Route exact path="/pets/new">
              <FormPet/>
          </Route>
          <Route exact path="/pets/:id/edit">
              <FormPet/>
          </Route>
          <Route exact path="/pets/:id">
              <DetailPet/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
