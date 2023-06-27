import React from "react";

function ActivityCard({ description, image, cost }) {
    return (
        <div className="activity-card">
            <h3>{description}</h3>
            <img src={image} alt={description}/>
            <h4>${cost}</h4>
        </div>
    )
}

export default ActivityCard;