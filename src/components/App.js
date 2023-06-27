import { Switch, Route } from "react-router-dom"; 
import { useState, useEffect } from "react"; 
// import './App.css';

//components
import Nav from "./Nav";
import Activities from "./Activities";
import Login from "./Login"

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
      </header>
    </div>
  );
}

export default App;
