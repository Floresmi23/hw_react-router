import {Link} from "react-router-dom";

function cools1(){
    return(
        <div>
            <nav>
                <Link to={"/boxes"}>Home</Link>
                <Link to={"/Cool"}>Boxes</Link>
                <Link to={"/"}>Cool</Link>
            </nav>

            <h1>Name:Tony - Age:28 - Color:Red - ID: 1 </h1>
        </div>

    )
}
export default cools1;