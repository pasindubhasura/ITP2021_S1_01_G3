import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {jsPDF} from 'jspdf'
import 'jspdf-autotable'
import '../../css/it19951386.css';

export default function CustomerTable() {
    let [customers, setCustomers] = useState([]);
    let [search, setSearch] = useState("");

    if(search.length > 0){
        customers = customers.filter((i) => {
            return i.fname.toLowerCase().match(search.toLowerCase()) || i.lname.toLowerCase().match(search.toLowerCase()) || i.cus_id.toLowerCase().match(search.toLowerCase());
        });
    }//search filter

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('http://localhost:5000/customers')
            setCustomers(response.data.customers);
        }
        fetchData();
    },[])//fetching customer data
    
    const deleteCustomer = async(id,cusID) => {
        alert("Are sure want to delete " + cusID + " ?")
        const deletion = await axios.delete(`http://localhost:5000/customers/delete/${id}`);
        if(deletion) {
            window.location = "/customers"
        }
         
    }//customer delete

    const pdf = () => {
        const loading = document.getElementById('loading');
        loading.style.display = "";//display loading icon
        const dwnIcon = document.getElementById('dwn-icon');
        dwnIcon.style.display = "none";//hide download icn

        setTimeout(() => {  
            loading.style.display = "none";
            dwnIcon.style.display = "";
        }, 1300);//display loading icon for 2 seconds  

        let bodyData = [];
        for(let i = 0; customers.length > i ; i++){
            bodyData.push([customers[i].cus_id,customers[i].fname,customers[i].lname, customers[i].email, customers[i].address, customers[i].pNo]);
        }//save json data to bodydata in order to print in the pdf table

        const doc = new jsPDF({orientation:"portrait"});
        var time = new Date().toLocaleString();
        doc.setFontSize(27);
        doc.text(`Customer Details Report`, 105, 13, null, null, "center");
        doc.setFontSize(10);
        doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
        doc.setFontSize(12);
        doc.text("Thilina Hardware - No 55, Main Road, Horana", 105, 22, null, null, "center");
        //doc.text("No 55, Main Road, Horana", 105, 30, null, null, "center"); 
        //doc.addImage(img, "JPEG",0,20);
        doc.autoTable({
            theme : 'grid',
            styles: {halign:'center'},
            headStyles:{fillColor:[12, 113, 250]},
            startY:27,
            head: [['Customer ID','Fname','Lname', 'Email', 'Address', 'Phone No']],
            body: bodyData
        })
        doc.save('CustomerReport.pdf');
    }//report generation function

    return(
    <div className="myTable">
        <h2>Customer Managment</h2>
        <Link to="/customer/add" className="btn ash-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
        </svg> New Customer</Link>
        <button onClick={pdf} className="btn btn-warning"><svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
        </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{display:'none'}}></span> Download</button>
        <input id="search-filter" className="form-control" type="text" placeholder="Search by name or ID..." onChange={(e) => {setSearch(e.target.value)}} value={search}/>
        <table id="table">
            <thead>
                <tr >
                    <th>Customer ID</th>
                    <th >First Name</th>
                    <th >Last Name</th>
                    <th >Email</th>
                    <th >Address</th>
                    <th >Phone No</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer) => {
                        return(
                            <tr key={customer._id}>
                                <td>{customer.cus_id}</td>
                                <td >{customer.fname}</td>
                                <td >{customer.lname}</td>
                                <td >{customer.email}</td>
                                <td >{customer.address}</td>
                                <td >{customer.pNo}</td>
                                <td >
                                    <Link className="btn ash-btn my-btn"
                                    to={`/updateCustomer/${customer._id}`} 
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg> Update</Link>
                                    <button onClick={() => deleteCustomer(customer._id,customer.cus_id)} className="btn btn-danger my-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
                                    Delete</button>
                                </td>
                            </tr>
                        )
                    })}   
            </tbody>
        </table>
    </div>
    );
}