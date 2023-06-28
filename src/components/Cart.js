import React from "react";

function Card ({ activity }){
    return (
    <div className="cart-card">
        <h3>#{activity.id}: {activity.description}</h3>
        <img src={activity.image} alt={activity.description}/>
        <h4>${activity.cost}</h4>
    </div>
    )
}

function Cart({ activities }){

    const renderedActivities = activities.map(activity => <Card key={activity.id} activity={activity}/>)

    return(
        <div>
            {renderedActivities}
        </div>
    )
}

export default Cart;