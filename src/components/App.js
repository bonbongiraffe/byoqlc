import { Switch, Route, useHistory } from "react-router-dom"; 
import { useState, useEffect } from "react"; 
import byoqlcLogo from "./image/byoqlcLogo.png"

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
  const [ user, setUser ] = useState({activities:[], image:""})

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
      })
  },[])

  //
  const handleFinish = () => {
    fetch(`${url}/users/${user.id}`,{
      method: "PATCH",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({ submitted: 0 })
    })
      .then( r => r.json())
      .then( updatedUser => setUser(updatedUser))
  }

  const handleRestart = () => {
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
      <header className="title">
        {/* <h1>BYOQLC</h1>
        <h3>Build Your Own Quarter Life Crisis</h3> */}
        <img className= "logo-img" src={byoqlcLogo} />
      </header>
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
        {/* need to redirect user from home page below vv */}
        <Route exact path="/">
          <Login setUser={setUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
