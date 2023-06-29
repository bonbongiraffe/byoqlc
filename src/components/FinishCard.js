import React from "react";

function FinishCard({ name, crisis, wallet, activities, image }){
    const renderedActivities = activities.map(activity => <li key={activity.id}>{activity.description}</li>)

    return(
        <div className="finish-card">
            <div className="user-info">
                <h3>{name}</h3>
                <h4>Level {crisis} Crisis</h4>
            </div>
            <img className="profile-picture" src={image}/>
            <ul>
                {renderedActivities}
                <li>with ${wallet} remaining</li>
            </ul>
        </div>
    )
}

export default FinishCard