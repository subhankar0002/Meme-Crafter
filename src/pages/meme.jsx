import React, { useEffect, useState } from "react";
import Card from "../components/card";
import {GetAllImage} from "../components/api"

const Memepage = ()=>{

    const [data,setData]=useState([])

    useEffect(()=>{
        GetAllImage().then((memes)=>setData(memes.data.memes) )
    },[]);


    return(
        <div className="flex flex-wrap bg-slate-100">
            {
                data.map(el => <Card image={el.url} title={el.name}/>)
                
            }
        </div>
    )
}

export default Memepage