import axios from "axios";
import React from "react";
import { useParams } from "react-router";
function Countrydet(){
    var [countrydet,setCountrydet]=React.useState(null)
    const params=useParams()
    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/alpha/${params.cname}`).then((res)=>{
            setCountrydet({...res.data[0]})
        })
    },[params])
    console.log(countrydet)
    return(
        countrydet&&<div>
            <h1>country:{countrydet.name.common}</h1>
            <h1>capital:{countrydet.capital}</h1>
            <h1>capital:{countrydet.capital}</h1>
            <h1>population:{countrydet.population}</h1>
            <img src={countrydet.flags.png} alt="" />
        </div>
    )
    
}
export default Countrydet