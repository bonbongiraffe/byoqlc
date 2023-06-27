import { Switch, Route } from "react-router-dom"; 
import { useState, useEffect } from "react"; 
// import './App.css';

//components
import Nav from "./Nav";
import Activities from "./Activities";
import Login from "./Login";
import Cart from "./Cart";

const url =  "http://localhost:3000"

function App() {
  const [ activities, setActivities ] = useState({})
  const [ user, setUser ] = useState({})

  //fetch activities
  useEffect(()=>{
    fetch(`${url}/activities`)
      .then(r => r.json())
      .then(activitiesObj => setActivities(activitiesObj))
  },[])

  //fetch current user
  useEffect(()=>{
    fetch(`${url}/users`)
      .then(r => r.json())
      .then(users => {
        setUser((user => user.submitted === false) ? users.find(user => user.submitted === false) : {})
      })
  },[])

  const addActivity = (newActivity) => {
    fetch(`${url}/users/${user.id}`,{
      method: "PATCH",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ 
        activities: [...user.activities, newActivity], 
        wallet: user.wallet-newActivity.cost,
        location: newActivity.destination
      })
    })
      .then( r => r.json())
      .then( updatedUser => setUser(updatedUser))
  }

  return (
    <div className="App">
      <header className="App-header">
      {user.name ? (
      <>
        <Nav user={user}/>
        <Switch>
          <Route path="/activities">
            <Activities location={user.location} activities={activities} addActivity={addActivity}/>
          </Route>
          <Route path="/current">

          </Route>
        </Switch>
      </>      
      ) : <Login setUser={setUser}/> } 
      </header>
    </div>
  );
}

export default App;
