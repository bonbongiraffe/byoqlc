import React from "react";

function ActivityCard({ activity }) {

    function handleClick () {
console.log()
    }
    return (
        <div className="activity-card" onClick {handleClick}>
            <h3>{activity.description}</h3>
            <img src={activity.image} alt={activity.description}/>
            <h4>${activity.cost}</h4>
        </div>
    )
}

export default ActivityCard;