import React  from "react";
import { NavLink, useHistory } from "react-router-dom"; 

function Nav({ user, handleFinish }) {
    const history = useHistory() 

    const handleClick = () => {
        handleFinish();
        history.push("/cart");
    }

    return(
        <nav>
            <h4>{user.name}</h4>
            {(user.submitted===false) ? (<h4>${user.wallet}</h4>) : null }
            {(user.submitted===false) ? (<button onClick={handleClick}>Finish Quarter Life Crisis</button>) : null }
            <ul>
                {(user.submitted===false) ? (
                    <React.Fragment>
                        <li>
                            <NavLink to="/activities">QLC Activities</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">QLC Cart</NavLink>
                        </li>
                    </React.Fragment>
                ) : null
                }
                {(user.submitted===0) ? (
                <li>
                    <NavLink to="/finish">Finish QLC</NavLink>
                </li>
                ) : null
                }
            </ul>
        </nav>
    )
}

export default Nav;