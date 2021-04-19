import React, { useState } from "react";
import axios from "axios";
import './styles.css';
import Header from './Header';

export default function ViewBranch(){


    return (
        <div>
            <Header/>
            <div className= "display-branch-view">
                <h6>Name: </h6>
                <h6>Address: </h6>
                <h6>Telephone: </h6>
                <h6>Email: </h6>

                <div>
                    <table className= "display-view-download">
                    {/* <table className= "displayTable"> */}
                        <thead>
                            <th>Employees</th>
                            <th></th>
                            <th>Vehicles</th>
                            <th></th>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>Employee 1</td>
                                    <td>
                                        <button type="button" className="btn my-btn">UNASSIGN</button>
                                    </td>
                                    <td>Vehicle 1</td>
                                    <td>
                                        <button type="button" className="btn my-btn">UNASSIGN</button>
                                    </td>   
                                </tr> 
                        </tbody>
                    </table>
                </div>

            </div>
            
            <div>
                <div className = "container">
                    <form className= "assignForm">
                        <h6>Assign Employee: </h6>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" />
                        </div>
                            <button  type="submit" className="btn my-btn">ASSIGN</button>
                    </form>
                </div>
                <div className = "container">
                    <form className= "assignForm">
                        <h6>Assign Vehicle: </h6>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" />
                        </div>
                            <button  type="submit" className="btn my-btn">ASSIGN</button>
                    </form>
                </div>
            </div>
        </div>
        
    )

}
