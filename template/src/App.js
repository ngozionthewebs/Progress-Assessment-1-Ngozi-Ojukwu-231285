
//Pages + NavBar
import Home from "./home";
import NavBar from "./navbar";
import One from "./one";
import Two from "./two";

//React Router + Chart JS
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";


// ChartJs

function App() {
  return (

    <Router>
        <div className="App">
            {/* //NavBar Component Below here */}
            <NavBar/>

            {/* //Content Class  */}
            <div className="content">

               {/* //Routes below here  */}

               <Switch>

                <Route exact path="/"> 
                  <Home/>
                </Route>

                <Route path="/one">
                   <One/>
                </Route>

                <Route path="/two">
                   <Two/>
                </Route>

               </Switch>

              

               




            </div>

           



          
          
        </div>
    </Router>
  );
}

export default App;
