import React, {useState}  from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {setUserSession} from '../../utils/common';
import '../../css/it19951386.css';

export default function CustomerLogin(props) {
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [errors, seterrors] = useState([]);
const [emailerror, setemailerror] = useState("");
const[logoutMsg] = useState(localStorage.getItem("logoutMsg"));//this sets logout msg if any
const[regMsg] = useState(localStorage.getItem("regMsg"));//tis sets register msg if any
window.onload = function() {
    localStorage.removeItem("logoutMsg")
    localStorage.removeItem("regMsg")
}//this resets the state on refreshing

const formHandler = async(e) => {
    e.preventDefault();
    setemailerror('');
    seterrors([]);
    const response = await axios.post('http://localhost:5000/customer/login', {email, password})
    if(response.data.errors){
        setpassword("");
        seterrors(response.data.errors);
    }
    if(response.data.success){
        setUserSession(response.data.id,response.data.token);
        localStorage.setItem('loginMsg', "You have successfully logged in! 😃");
        props.history.push('/customer/profile');
    }
    if(response.data.emailerror){
        setemailerror(response.data.emailerror);
        setpassword("");
    }                
} 
    return (
        <div>
            <form onSubmit={formHandler} className="it19951386-myForm form-group">
            <h2>Customer Login Form</h2>
                {errors ? errors.map((error) => {
                    return (
                        <div className="alert alert-danger" role="alert">
                            {error.msg}
                      </div>
                    )
                }):null}
                {emailerror ? 
                <div className="alert alert-danger" role="alert">
                    {emailerror}
                    </div>: null}
                {logoutMsg ? 
                <div className="alert alert-success" role="alert">
                {logoutMsg}
                </div> : null}
                {regMsg ? 
                <div className="alert alert-success" role="alert">
                {regMsg}
                </div> : null}
                <label>Email</label>
                <input className="form-control" type="email" onChange={(e) => setemail(e.target.value)} value={email}/><br/>
                <label>Password</label>
                <input className="form-control" type="password" onChange={(e) => setpassword(e.target.value)} value={password}/><br/> 
                <p className="it19951386-centerDiv">Don't have an account? <Link className="it19951386-link" to="/customer/register"> Register here</Link></p>               
                <div className='it19951386-centerDiv'><input type="submit" value="Log in" className="btn it19951386-green-btn it19951386-mybtn"/></div>
            </form>
        </div>
        
    )
}
