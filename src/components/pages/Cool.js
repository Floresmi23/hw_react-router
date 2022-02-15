import React from "react";
import {Link} from "react-router-dom";

function Cool(){

    return(
        <div>

            <Link to={"/data/cools1"}>Name:Tony - Age:28 - Color:Red - ID: 1</Link>

            <h1> </h1>

            <Link to={"/data/cools2"}>Name:Mike - Age:18 - Color:Green - ID: 2</Link>

            <h1> </h1>

            <Link to={"/data/cools3"}>Name:Gabi - Age:23 - Color:Yellow - ID: 3</Link>


        </div>


    )
}

export default Cool;