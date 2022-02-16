import React from "react";
import {Link} from "react-router-dom";




function Cool(){


    return(
        <div>


            <nav>
                <Link to={"/Object1"}>Name: Tony - Age: 28 - Color: Red - ID: 1</Link>

                <h1> </h1>

                <Link to={"/Object2"}>Name: Mike - Age: 18 - Color: Green - ID: 2</Link>

                <h1> </h1>

                <Link to={"/Object3"}>Name: Gabi - Age: 23 - Color: Yellow - ID: 3</Link>

            </nav>



        </div>


    )
}

export default Cool;