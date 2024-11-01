import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEye } from '@fortawesome/free-solid-svg-icons';

const AdminNavbar = () => {
    return (
        <nav className="admin-navbar">
            <h2 className="navbar-title">Admin Dashboard</h2>
            <ul className="navbar-links">
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} /> Admin Home
                    </Link>
                </li>
                <li>
                    <Link to="https://sankidsan.github.io/j1/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEye} /> View Customer Site
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNavbar;
