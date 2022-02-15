import Box from "./Box";

function BoxList(){
    const list = [
        {
            message: " ",
            nm:"",
            num:5
        },
        {
            message: " ",
            nm:"",
            num:8
        },
        {
            message: " ",
            nm:"",
            num:3
        }
    ];

    let boxEles = list.map((obj, idx)=>
        <Box key={idx} mess={obj.message} nm={obj.nm} number={obj.num}/>
    )

    return(
        <div>
            {boxEles}
        </div>
    )
}

export default BoxList;