import React from "react";

function Countrydetails({country}){
    return(
        <div>
            {country?.name?.common}
            <img src={country?.flags[0]} alt="" width={"100%"}/>
            <img src={country?.flags[0]} alt="" width={"100%"}/>
        </div>
    )
}
export default Countrydetails