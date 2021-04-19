import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    
    return(
        <nav id = "header" className="navbar navbar-expand-lg navbar-light">
         {/* <nav id = "header" className="navbar navbar-expand-lg navbar-light bg-light"> */}
            <a className="navbar-brand" href="#">Branch Management</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/branches">Branches <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add">Create Branch</a>
                        {/*   <Link to="/add" className="nav-link" >Create Branch</Link>  */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/download">Branch Report</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header; 