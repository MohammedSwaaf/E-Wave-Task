import React from 'react';
import './App.css';
import Home from './home/home';
import {  Route, Switch, HashRouter as Router} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
        {/* <Example /> */}
          <Switch>
            {/* {this.props.isAuth===false ? <div> */}
              
             
              <Route exact path='/' component={Home} />
              {/* <Route path='/add' component={AddCourses} />
              <Route path='/shit' component={AddCourses} />
              <Route path='/sign' component={Sign} /> */}
              
              
              {/* </div> : <Switch><Route path='/sign' component={Sign} /></Switch>} */}

          </Switch>
        </Router>
    </div>
  );
}

export default App;
