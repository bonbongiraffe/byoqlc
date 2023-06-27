import React  from "react";
import { NavLink } from "react-router-dom"; 

function Nav() {
    return(
        <nav>
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