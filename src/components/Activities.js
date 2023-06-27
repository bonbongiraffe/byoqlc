import React, { useState } from "react";
import ActivityCard from "./ActivityCard"

function Activities({ location, activities, addActivity }) {

    const currentActivities = activities[location] ? activities[location] : []
    const renderedActivites = currentActivities.map((activity) => 
        <ActivityCard key={activity.id} activity={activity} addActivity={addActivity}/>
    )

    return (
        <>
            <h2>Welcome to {location}!</h2>
            <div className="activities-container">
                {renderedActivites}
            </div>
        </>
    )
}

export default Activities;