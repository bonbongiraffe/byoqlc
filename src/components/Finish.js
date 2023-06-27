import React from "react"

function Finish({ user, activities, handleRestart }){
    const renderedActivities = activities.map(activity => 
        <li key={activity.id}>{activity.description}</li>
    )

    return(
        <div>
            <h1>{user.name}'s Quarter Life Crisis</h1>
            <ul>
                {renderedActivities}
                <li>With ${user.wallet} remaining!</li>
            </ul>
            <button onClick={() => handleRestart()}>New Quarter Life Crisis!</button>
        </div>
    )
}

export default Finish;