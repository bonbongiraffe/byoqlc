import React, { useState, useEffect } from "react"
import FinishCard from "./FinishCard"
const url =  "http://localhost:3000"

function Finish({ user, activities, handleRestart }){
    const [ users, setUsers ] = useState([]);
    useEffect(()=>{
        fetch(`${url}/users`)
            .then( r => r.json())
            .then( usersArr => setUsers(usersArr.filter(pUser => pUser.name !== user.name)))
    },[])

    const renderedActivities = activities.map(activity => 
        <li key={activity.id}>{activity.description}</li>
    )

    const renderedUsers = users.map(user => <FinishCard key={user.id} {...user}/>)

    return(
        <div className="finish">
            <h1>{user.name}'s Quarter Life Crisis</h1>
            <ul className="user-finish">
                {renderedActivities}
                <li>With ${user.wallet} remaining!</li>
            </ul>
            <button onClick={() => handleRestart()}>New Quarter Life Crisis!</button>
            <h1>Other Users' Quarter Life Crises</h1>
            <div className="other-qlc">
                {renderedUsers}
            </div>
        </div>
    )
}

export default Finish;