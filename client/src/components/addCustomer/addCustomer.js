import React, {useState} from 'react'
import axios from 'axios'
import '../../css/it19951386.css';

export default function AddCustomer() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [pNo, setpNo] = useState("");
    const [password, setpassword] = useState("");
    const [errors, seterrors] = useState([]);
    const [emailerror, setemailerror] = useState("");

    const customerFormSubmit = (async(e) => {
        e.preventDefault();
        setemailerror("")
        seterrors([]);
        document.getElementById('customerAddLoadingBtn').removeAttribute("hidden");
        document.getElementById('customerAddBtn').setAttribute("hidden","true");
        
        const response = await axios.post('http://localhost:5000/customers/add', {fname, lname, email, password,address, pNo});
        if(response.data.errors){
            setpassword("");
            seterrors(response.data.errors);
            document.getElementById('customerAddLoadingBtn').setAttribute("hidden","true");
            document.getElementById('customerAddBtn').removeAttribute("hidden");
            }
        if(response.data.success){
            document.getElementById('customerAddLoadingBtn').setAttribute("hidden","true");
            document.getElementById('customerAddBtn').removeAttribute("hidden");
            window.location = "/customers";
        }
        if(response.data.emailerror){
            setemailerror(response.data.emailerror);
            setpassword("");
            document.getElementById('customerAddLoadingBtn').setAttribute("hidden","true");
            document.getElementById('customerAddBtn').removeAttribute("hidden");
        }            
})

    return (
        <div>
            <form onSubmit={customerFormSubmit} className="form-group myForm">
            <h2>Add New Customer</h2>
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
                <label>First Name</label>
                <input className="form-control" type="text" name="fname" onChange={(e) => {setfname(e.target.value);}} value={fname} /><br/>
                <label>Last Name</label>
                <input className="form-control" type="text" name="lname" onChange={(e) => {setlname(e.target.value);}} value={lname}/><br/>
                <label>Email</label>
                <input className="form-control" type="email" name="email" onChange={(e) => {setemail(e.target.value);}} value={email}/><br/>
                <label>Address</label>
                <input className="form-control" type="text" name="address" onChange={(e) => {setaddress(e.target.value);}} value={address}/><br/>
                <label>Phone No</label>
                <input className="form-control" type="text" name="pNo" onChange={(e) => {setpNo(e.target.value);}} value={pNo}/><br/>
                <label>Password</label>
                <input className="form-control" type="password" name = "password" onChange={(e) => {setpassword(e.target.value);}} value={password}/>
                <button className="btn ash-btn my-btn" id="customerAddBtn">Add 
                </button>
                <button className="btn ash-btn my-btn" id="customerAddLoadingBtn" hidden>
                <span className="spinner-border spinner-border-sm " id="loading" role="status" aria-hidden="true" style={{"margin-right":"5px"}}>
                </span>
                Adding
                </button>
            </form>
        </div>
    )
}
