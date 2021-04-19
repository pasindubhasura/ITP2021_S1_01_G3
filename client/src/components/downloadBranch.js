import React, { useState } from "react";
import axios from "axios";
import Header from './Header';

export default function AddBranch(){


    return (
        <div>
        <Header/>
        <div className = "view-download">
            <center><h2>Branch Report</h2></center>
            <button  type="submit" className="btn my-btn">DOWNLOAD</button>
            <div className= "display-branch-view">
                <h6>Name: </h6>
                <h6>Address: </h6>
                <h6>Telephone: </h6>
                <h6>Email: </h6>
                <div>
                    <table className= "display-view-download">
                        <thead>
                            <th>Employees</th>
                            <th>Vehicles</th>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>Employee 1</td>
                                    <td>Vehicle 1</td>
                                </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )

}
