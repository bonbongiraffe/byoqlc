import { Switch, Route, useHistory } from "react-router-dom"; 
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
  const history = useHistory()
  const [ activities, setActivities ] = useState({})
  const [ user, setUser ] = useState({})
  //gameState 
  // 0: current user, not submitted
  // 1: current user, submitted
  //const [ gameState, setGameState ] = useState(0)

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
        setUser(users.find(user => user.submitted !== true) ? users.find(user => user.submitted !== true) : {})
        //checkGameState(user)
      })
  },[])

  //add-on to initial fetch ^ above, checks if user has submitted their entry
  // const checkGameState = (user) => {
  //   if (user.submitted !== false)
  //     setGameState(1)
  // }

  //d
  const handleFinish = () => {
    //setGameState(1)
    fetch(`${url}/users/${user.id}`,{
      method: "PATCH",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ submitted: 0 })
    })
      .then( r => r.json())
      .then( updatedUser => setUser(updatedUser))
  }

  const handleRestart = () => {
    //setGameState(0)
    fetch(`${url}/users/${user.id}`,{
      method: "PATCH",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ submitted: true })
    })
    history.push("/login")
    setUser({})
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
      <Nav user={user} handleFinish={handleFinish}/> 
        <Switch>
          <Route path="/activities">
            <Activities location={user.location} activities={activities} addActivity={addActivity}/>
          </Route>
          <Route path="/cart">
            <Cart activities={user.activities}></Cart>
          </Route>
          <Route path="/finish">
            <Finish user={user} activities={user.activities} handleRestart={handleRestart}></Finish>
          </Route>
          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
        </Switch>
      {/* {user.name ? (
      <>
        <Nav user={user} handleFinish={handleFinish}/> 
        <Switch>
          <Route path="/activities">
            <Activities location={user.location} activities={activities} addActivity={addActivity}/>
          </Route>
          <Route path="/cart">
            <Cart activities={user.activities}></Cart>
          </Route>
          <Route path="/finish">
            <Finish user={user} activities={user.activities} handleRestart={handleRestart}></Finish>
          </Route>
        </Switch>
      </>      
      ) : <Login setUser={setUser}/> }  */}
      </header>
    </div>
  );
}

export default App;
