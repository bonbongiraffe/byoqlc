import React from "react";

function ActivityCard({ description, image, price }) {
    return (
        <div className="activity-card">
            <h1>{description}</h1>
            <img src={image} alt={description}/>
            <h1>${price}</h1>
        </div>
    )
}

export default ActivityCard;