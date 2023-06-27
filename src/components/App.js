import { Switch, Route } from "react-router-dom"; 
import { useState, useEffect } from "react"; 
// import './App.css';

//components
import Nav from "./Nav";
import Activities from "./Activities";
import Login from "./Login";
import Cart from "./Cart";
import Finish from "./Finish";

const url =  "http://localhost:3000"

function App() {
  const [ activities, setActivities ] = useState({})
  const [ user, setUser ] = useState({})
  //gameState 
  // 0: current user, not submitted
  // 1: current user, submitted
  const [ gameState, setGameState ] = useState(0)

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
        setUser((user => user.submitted !== true) ? users.find(user => user.submitted !== true) : {})
      })
  },[])

  const checkGameState = (user) => {
    if (user.submitted !== false)
      setGameState(1)
  }

  const handleFinish = () => {
    setGameState(1)
    fetch(`${url}/users/${user.id}`,{
      method: "PATCH",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ submitted: 0 })
    })
      .then( r => r.json())
      .then( updatedUser => setUser(updatedUser))
  }

  const addActivity = (activity) => {
    if (user.wallet >= activity.cost){
      const newActivity = {...activity, id: user.activities.length+1}
      console.log(newActivity)
      fetch(`${url}/users/${user.id}`,{
        method: "PATCH",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({ 
          activities: [...user.activities, newActivity], 
          wallet: user.wallet - newActivity.cost,
          location: newActivity.destination
        })
      })
        .then( r => r.json())
        .then( updatedUser => setUser(updatedUser))
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      {user.name ? (
      <>
        <Nav user={user} gameState={gameState} handleFinish={handleFinish}/>
        <Switch>
          <Route path="/activities">
            <Activities location={user.location} activities={activities} addActivity={addActivity}/>
          </Route>
          <Route path="/cart">
            <Cart activities={user.activities}></Cart>
          </Route>
          <Route path="/finish">
            <Finish user={user} activities={user.activities}></Finish>
          </Route>
        </Switch>
      </>      
      ) : <Login setUser={setUser}/> } 
      </header>
    </div>
  );
}

export default App;
