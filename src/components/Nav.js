import React  from "react";
import { NavLink } from "react-router-dom"; 

function Nav({ user, gameState, handleFinish }) {
    const handleClick = () => {
        handleFinish()
    }

    return(
        <nav>
            <h4>{user.name}</h4>
            {gameState ? null: (<h4>${user.wallet}</h4>)}
            {gameState ? null: (<button onClick={handleClick}>Finish Quarter Life Crisis</button>)}
            <ul>
                {gameState ? (                 
                <li>
                    <NavLink to="/finish">Finish QLC</NavLink>
                </li>
                ) : (
                <React.Fragment>
                <li>
                    <NavLink to="/activities">QLC Activities</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">QLC Cart</NavLink>
                </li>
                </React.Fragment>
                )}

            </ul>
        </nav>
    )
}

export default Nav;