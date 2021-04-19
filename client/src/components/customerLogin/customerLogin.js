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
        props.history.push('/customer/profile');
    }
    if(response.data.emailerror){
        setemailerror(response.data.emailerror);
        setpassword("");
    }                
} 
    return (
        <div>
            <form onSubmit={formHandler} className="myForm form-group">
            <h2>Customer Login Form</h2>
                {errors ? errors.map((error) => {
                    return (
                        <div class="alert alert-danger" role="alert">
                            {error.msg}
                      </div>
                    )
                }):null}
                {emailerror ? 
                <div class="alert alert-danger" role="alert">
                    {emailerror}
                    </div>: null}
                <label>Email</label>
                <input className="form-control" type="email" onChange={(e) => setemail(e.target.value)} value={email}/><br/>
                <label>Password</label>
                <input className="form-control" type="password" onChange={(e) => setpassword(e.target.value)} value={password}/><br/> 
                <p className="center-text">Don't have an account? <Link to="/customer/register">Register here</Link></p>               
                <input type="submit" value="Log in" className="btn btn-primary my-btn"/>
            </form>
        </div>
        
    )
}
