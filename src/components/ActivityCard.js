import React from "react";

function ActivityCard({ activity, addActivity }) {
    const handleClick = () => {
        addActivity(activity)
    }

    return (
        <div onClick={handleClick} className="activity-card">
            <h3>{activity.description}</h3>
            <img src={activity.image} alt={activity.description}/>
            <h4>${activity.cost}</h4>
        </div>
    )
}

export default ActivityCard;