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
            <div>
                <h2>{user.name}</h2>
                {(user.submitted===false) ? (<h3>${user.wallet}</h3>) : null }
            </div>
            <img className="profile-picture" src={user.image}/>
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
            {(user.submitted===false) ? (<button onClick={handleClick}>Finish Quarter Life Crisis</button>) : null }
        </nav>
    )
}

export default Nav;