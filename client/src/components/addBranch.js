import React, { useState } from "react";
import axios from "axios";
import { Component } from "react";
import './styles.css';
import Header from './Header';

export default function AddBranch(){

    const[name, setName] = useState("");
    const[address, setAddress] = useState("");
    const[telephone, setTelephone] = useState("");
    const[email, setEmail] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newBranch = {
            name,
            address,
            telephone,
            email
        }

        axios.post("http://localhost:5000/branch/add", newBranch).then(()=> {
            alert("Branch added!");
        }).catch((error)=> {
            alert(error);
        })
     
    }

    return(
        <div className="container"> 
        <Header/>  
            <form onSubmit={sendData} className= "myForm">
                <h2>Create Branch</h2>
                <div className="form-group">
                    <label for="name">Branch name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter branch name" 
                    onChange= {(e)=> {
                        setName(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter branch address"
                    onChange= {(e)=> {
                        setAddress(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="telephone">Telephone number</label>
                    <input type="text" className="form-control" id="telephone" placeholder="Enter branch contact number"
                    onChange= {(e)=> {
                        setTelephone(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter branch email"
                    onChange= {(e)=> {
                        setEmail(e.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn my-btn">CREATE</button>
                {/* <button type="submit" className="btn btn-primary">Add</button> */}
            </form>
        </div>
    )
}