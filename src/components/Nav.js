import React  from "react";
import { NavLink } from "react-router-dom"; 

function Nav({ user }) {
    return(
        <nav>
            <h4>{user.name}</h4>
            <h4>${user.wallet}</h4>
            <ul>
                <li>
                    <NavLink to="/activities">Activities</NavLink>
                </li>
                <li>
                    <NavLink to="/current">QLC Cart</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;