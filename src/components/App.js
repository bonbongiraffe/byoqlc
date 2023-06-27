import { Switch, Route } from "react-router-dom"; 
import { useState, useEffect } from "react"; 
// import './App.css';

//components
import Nav from "./Nav";
import Activities from "./Activities";
import Login from "./Login";

const url =  "http://localhost:3000"

function App() {
  const [ activities, setActivities ] = useState({})
  const [ currentUser, setCurrentUser ] = useState({})

  useEffect(()=>{
    fetch(`${url}/activities`)
      .then(r => r.json())
      .then(activitiesObj => setActivities(activitiesObj))
  },[])

  useEffect(()=>{
    fetch(`${url}/users`)
      .then(r => r.json())
      .then(users => setCurrentUser(
        users.find(user => user.submitted === false) ? users.find(user => user.submitted === false) : {}))
  },[])

  return (
    <div className="App">
      <header className="App-header">
      {currentUser.name ? (
      <>
        <Nav user={currentUser}/>
        <Switch>
          <Route path="/activities">
            <Activities activities={activities}/>
          </Route>
        </Switch>
      </>      
      ) : <Login setCurrentUser={setCurrentUser}/> } 
      </header>
    </div>
  );
}

export default App;
