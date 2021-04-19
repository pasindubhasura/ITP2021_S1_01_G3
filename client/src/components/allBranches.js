import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import './styles.css';
import Header from './Header';

//import { Table } from 'react-materialize';

export default function AllBranches(){

    const [branches, setBranches] = useState([]);

    //read
    useEffect(() => {
        function getBranches(){
            axios.get("http://localhost:5000/branch/").then((res) =>{
                setBranches(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getBranches();
    }, [])

    //delete
    const deleteBranch = async(id) => {
        const deletion = await axios.delete(`http://localhost:5000/branch/delete/${id}`);
        if(deletion){
            window.location = "/branches"
        }
    }

   /* return(
        <table>
            <tbody>
               { branches.map((branch) => {
                    return(
                        <tr key ={branch._id}>
                            <td>{branch.name}</td>
                        </tr>
                    )  
                }
            </tbody>
        </table>
    ) 
*/


    return (
        <div>
            <Header/>
        <table className= "displayTable">
        <tbody>
            {
            branches.map(branch => 
                <tr key={branch._id}>
                    <td>
                        {branch.name}
                    </td>
                    <td>
                        {branch.address}
                    </td>
                    <td>
                        {branch.telephone}
                    </td>
                    <td>
                        {branch.email}
                    </td>
                    <td>
                        {/* <button type="button" class="btn btn-info">Update</button> */}
                        <Link to="/update" className="btn my-btn" >UPDATE</Link>
                        {/* <Link to="/update" className="btn btn-info" >Update</Link> */}
                    </td>
                    <td>
                        {/* <button type="button" className="btn my-btn">DELETE</button> */}
                        <button onClick={() => deleteBranch(branch._id)} type="button" className="btn my-btn">DELETE</button>
                    </td>
                     <td> 
                         {/* <button type="button" className="btn my-btn">VIEW</button>  */}
                         <Link to="/view" className="btn my-btn" >VIEW</Link>
                     </td> 
                </tr>
                )
            }
        </tbody>
        </table>
        </div>
    );
    
}