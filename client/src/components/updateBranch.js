import React, { useState } from "react";
import axios from "axios";
import Header from './Header';

export default function UpdateBranch(){


    return (
        <div className = "container">
            <Header/>
            <form className= "myForm">
                <h2>Update Branch</h2>
                <div className="form-group">
                    <label for="name">Branch name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address"/>
                </div>
                <div className="form-group">
                    <label for="telephone">Telephone number</label>
                    <input type="text" className="form-control" id="telephone"/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                    <button  type="submit" className="btn my-btn">UPDATE</button>
                {/* <button  type="submit" className="btn btn-primary">Update</button> */}
            </form>
        </div>
    )

}

