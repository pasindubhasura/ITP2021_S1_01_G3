import React, {useState}  from 'react';
import axios from 'axios';
import {getUser} from '../../utils/common';
import '../../css/it19951386.css';

export default function CustomerPasswordReset(props) {
    const [password, setpassword] = useState("");
    const [repassword, setrepassword] = useState("");
    const id = getUser();
    const [errors, seterrors] = useState([]);
    const [emailerror, setemailerror] = useState("");   

    const resetPassword = async(e) => {

        e.preventDefault();
        setemailerror('');
        seterrors([]);

        const response = await axios.post(`http://localhost:5000/customer/profile/reset-password/${id}`,{password,repassword});
        if (response.data.success) {
            localStorage.setItem('success', 'Password reset is successfull!');
            props.history.push("/customer/profile");
        }
        if (response.data.errors) {
            seterrors(response.data.errors);
        }
        if(response.data.emailerror){
            setemailerror(response.data.emailerror);
        } 
    }
    const cancelReset = () => {
        window.location = "/customer/profile";
    }

    return (
        <div name="password-form">
            <form className="form-group myForm">
            <h2>Reset Password</h2>
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
            <label>New Password</label> 
            <input className="form-control" type="password" value={password} onChange={(e) => setpassword(e.target.value.trim())} /><br/>

            <label>Re-type Password</label>   
            <input className="form-control" type="password" value={repassword} onChange={(e) => setrepassword(e.target.value.trim())} /><br/> 

            <div className="btn-section">
            <input id="resetPassword" type="button" value="Reset" onClick={resetPassword} className="green-btn btn" />
            <input id="cancelButton2" type="button" value="Cancel" onClick={cancelReset} className="btn-primary btn" />
            </div>
            </form>
        </div>
    )
}
