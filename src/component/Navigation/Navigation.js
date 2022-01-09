import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container">
                <Link className="navbar-brand text-white fs-2" to="/"><i className="px-1 p-2 fas fa-laptop-house"></i>Employee Management</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/"><i className="px-1 fas fa-users"></i>Our Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/addEmployee"><i className="px-1 fas fa-user-plus"></i>Add Employee</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;