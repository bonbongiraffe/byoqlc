import { Switch, Route } from "react-router-dom"; 
import { useState, useEffect } from "react"; 
// import './App.css';

//components
import Nav from "./Nav";
import Activities from "./Activities";
<<<<<<< HEAD
import Login from "./Login"
=======
import Login from "./Login";
>>>>>>> master

const url =  "http://localhost:3000/activities"

function App() {
  const [ activities, setActivities ] = useState({})
  const [ currentUser, setCurrentUser ] = useState({})

  useEffect(()=>{
    fetch(url)
      .then(r => r.json())
      .then(activitiesObj => setActivities(activitiesObj))
  },[])

  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
      {currentUser ? (
      <>
        <Nav/>
        <Switch>
          <Route path="/activities">
            <Activities activities={activities}/>
          </Route>
        </Switch>
      </>      
      ) : <Login setCurrentUser={setCurrentUser}/> } 
=======
        <Login />
      <Switch>
        <Route path="/activities">
          <Activities activities={activities}/>
        </Route>
      </Switch>
>>>>>>> master
      </header>
    </div>
  );
}

export default App;
