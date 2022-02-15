import {useParams} from "react-router-dom";

function BoxPage(){

    const list = [
        {
            message: "",
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

    const params = useParams()

    const curObj = list.find(obj => obj.nm ===params.id);




    return(
        <div>
            <h1>{curObj.nm}</h1>
            <p>{curObj[0].message}</p>
        </div>
    )
}

export default BoxPage;