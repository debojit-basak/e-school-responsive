import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Books from './Components/Books/Books';
import Courses from './Components//Courses/Courses';
import Teacher from './Components/Teacher/Teacher';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Header></Header>
      <Switch>
      {/* <Home></Home>
      <Books></Books>
      <Courses></Courses>
      <Teacher></Teacher>
      <Testimonials></Testimonials>
      <Footer></Footer> */}
      <Route path="/courses">
        <Courses></Courses>
      </Route>
      <Route path="/teachers">
        <Teacher></Teacher>
      </Route>
      <Route path="/testimonials">
        <Testimonials></Testimonials>
      </Route>
      <Route exact path="/">
      <Home></Home>
      <Books></Books>
      <Courses></Courses>
      <Teacher></Teacher>
      <Testimonials></Testimonials>
      <Footer></Footer>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
