import React from "react";
import { Outlet, useNavigate } from "react-router";
import Softwareskills from "./softwareskills";
import Hardwareskills from "./hardwareskills";
function Aboutus() {
    const navigate = useNavigate()
    const softwareskills = () => {
      navigate('softwareskills')
    }
    const hardwareskills = () => {
      navigate('hardwareskills')
    }
    return(
        <div>
            <h1>My skills:-</h1>
            <span onClick={softwareskills}>software</span>&nbsp;&nbsp;&nbsp;
            <span onClick={hardwareskills}>hardware</span>
            <Outlet></Outlet>
        </div>

    )
}
export default Aboutus