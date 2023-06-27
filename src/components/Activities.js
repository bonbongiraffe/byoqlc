import React, { useState } from "react";
import ActivityCard from "./ActivityCard"

function Activities({ activities }) {
    const [ location, setLocation ] = useState("NYC") 

    const currentActivities = activities[location] ? activities[location] : []
    // console.log(currentActivities)
    const renderedActivites = currentActivities.map((activity) => 
        <ActivityCard key={activity.id} {...activity}/>)

    return (
        <div className="activities-container">
            {renderedActivites}
        </div>
    )
}

export default Activities;