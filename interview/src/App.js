import './App.css';
import Landing from './pages/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import Room from './pages/room.ejs'
import Applicantinfo from './pages/Applicantinfo';
import Meetings from './pages/Meetings';
import Getinfo from './pages/Getinfo';
import Accept from './pages/Accept';
// let nameme ;
// const getmeet = () => {
//   // console.log("Works");
//   fetch("http://localhost:4000/Meetings")
//     .then((response) => response.json())
//     .then((data) => {
//       //nameme= data.
//       console.log("y u no work");
//       nameme = data
//       console.log(nameme);
      
//     });
// };
// getmeet();
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Landing />
          </Route>
          <Route exact path = "/Meetings">
            <Meetings/>
          </Route>
          {/* <Route exact path = "/Meetings/Get1">
            <Room />
          </Route> */}
          <Route exact path = "/Applicantinfo">
            <Applicantinfo/>
          </Route>
          <Route exact path = "/Meetings/Get/:id" >
            <Getinfo />
           </Route>
           <Route exact path = "/Meetings/Accept/:id" >
            <Accept />
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
