import React from "react";

function Card ({ activity }){
    const isFlight = activity.description.includes("Fly") ? true : false

    return (
    <div className={isFlight ? "flight-card" : "cart-card"}>
        <h3>#{activity.id}: {activity.description}</h3>
        <img src={activity.image} alt={activity.description}/>
        <h4>${activity.cost}</h4>
        <h5>Location: {activity.destination}</h5>
    </div>
    )
}

function Cart({ activities }){

    const renderedActivities = activities.map(activity => <Card key={activity.id} activity={activity}/>)

    return(
        <div className="cart">
            {renderedActivities}
        </div>
    )
}

export default Cart;