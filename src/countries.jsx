import React from "react";
import axios from "axios";
import { Navigate, Outlet, useNavigate } from "react-router";
function Countries() {
    var [countries, setCountries] = React.useState([])
    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            setCountries(res.data)
        })
    }, [])
    const navigate = useNavigate()
    function cdetails(c) {
        navigate(`countrydet/${c.cca2}`)

    }
    return (
        <div className="d-flex flex-wrap">
            <div style={{width:"45%"}}>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>country name</th>
                            <th>capital</th>
                            <th>population</th>
                            <th>region</th>
                        </tr>
                    </thead>
                    <tbody className="table-success">
                        {
                            countries.map((c) => {
                                return (
                                    <tr onClick={() => { cdetails(c) }}>
                                        <td>{c.name.common}</td>
                                        <td>{c.capital}</td>
                                        <td>{c.population}</td>
                                        <td>{c.region}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div style={{width:"45%"}}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
export default Countries