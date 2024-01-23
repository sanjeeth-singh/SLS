import React from "react";
import axios from "axios";
import Countrydetails from "./countrydetails";

function Countries(){
    var [country,setcountry]=React.useState([])
    var [countrydetails,setcountrydetails]=React.useState([])

    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3/all').then((res)=>{
            setcountry(res.data)
        })
    },[])
    console.log(country)

    return(
        <div className="d-flex flex-wrap">
            <ul className="w-50">
                {
                    country.map((c)=>{
                        return(
                            <li onClick={()=>{setcountrydetails(c)}}>{c.name.common}</li>
                        )
                    })
                }
            </ul>
            <div className="w-50">
                <h1>Country Details</h1>
               <h3> <Countrydetails country={countrydetails}></Countrydetails></h3>
                
            </div>
        </div>

    )
}
export default Countries