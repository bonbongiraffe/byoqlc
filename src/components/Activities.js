import React, { useState } from "react";
import ActivityCard from "./ActivityCard"
import Search from "./Search"

function Activities({ location, activities, addActivity }) {

    const [search, setSearch] = useState ("")
    const currentActivities = activities[location] ? activities[location] : []
    const filteredActivities = currentActivities.filter((activity) =>
        activity.description.toLowerCase().includes(search.toLowerCase())
    )
    const renderedActivites = filteredActivities.map((activity) => 
        <ActivityCard key={activity.id} activity={activity} addActivity={addActivity}/>
    )

    return (
        <>
            <div className="activities-header">
                <h2>Welcome to {location}!</h2>
                <Search search = {search} setSearch = {setSearch}/>
            </div>
            <div className="activities-container">
                {renderedActivites}
            </div>
        </>
    )
}

export default Activities;