import React from "react";
import Style from "./Style";

//any other imports

function Box(props){

    const [num, setNum]= React.useState(0);
    const [color, setColor]= React.useState("red");
    const [width1, setWidth1] = React.useState("250px");
    const [height1, setHeight1] = React.useState("250px");

    let addUp =(nm)=>{
        let result = num+nm;

        setNum(result);
    }



    let combine =()=>{
        addUp(props.number);
        setColor("green")
        setWidth1("10000px")
        setHeight1("1000px")

    }

    let style = {
        backgroundColor: color,
        width: width1,
        height: height1
    }

    let pEles = [""].map((p ,idx )=>
        <p key={idx}>{p}</p>
    )



    return(
        <div style={{...Style.box, ...style}} onClick={combine}>
            <p>{props.mess}</p>
            <p>{props.nm}</p>
            <p>{num}</p>
            {pEles}

            {/*click button*/}
            {/*<button onClick={()=>addUp(props.number)}>Click Me</button>*/}
            {/*CLick button*/}

        </div>
    )
}

export default Box;


//========================================================================
//                            HINT for HW 1/25/22
//When you click on a box its going to check a number, refer it to an array
// Make it change the color/border for each item.
//========================================================================
