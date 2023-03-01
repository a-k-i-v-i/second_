import React from "react";
import {NavLink} from "react-router-dom";

function Courses() {
    return(
        <div className="courses">
            <NavLink to={"frontend"} className="courses--a">FrontEnd</NavLink>
            <NavLink to={"UxUi"} className="courses--a">UI/UX design</NavLink>
            <NavLink to={"backend"} className="courses--a">BackEnd</NavLink>
        </div>
    )
}
export default Courses