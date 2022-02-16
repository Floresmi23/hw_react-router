import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/boxes"}>Home</Link>
            <Link to={"/Cool"}>Objects</Link>
            <Link to={"/"}>Cool</Link>

        </nav>
    )
}
export default Nav;