import React, { useState } from 'react';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = () => {
    const [goldRate, setGoldRate] = useState('');
    const [silverRate, setSilverRate] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleUpdateRates = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/update-rates`, {
                gold: goldRate,
                silver: silverRate,
            });
            setMessage('Rates updated successfully!');
            setGoldRate('');
            setSilverRate('');
        } catch (error) {
            setMessage('Error updating rates.');
        }
    };

    const checkPassword = () => {
        const actualPassword = process.env.REACT_APP_ADMIN_PASSWORD; // Access the environment variable
        if (password === actualPassword) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password!");
        }
    };

    return (
        <div className="admin-page">
            {!isAuthenticated ? (
                <div>
                    <h2>Admin Login</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                    <button onClick={checkPassword}>Login</button>
                </div>
            ) : (
                <div>
                    <h2>Admin Update Rates</h2>
                    <form onSubmit={handleUpdateRates} className="admin-form">
                        <label>
                            Gold Rate:
                            <input 
                                type="number" 
                                value={goldRate} 
                                onChange={(e) => setGoldRate(e.target.value)} 
                                required 
                            />
                        </label>
                        <br />
                        <label>
                            Silver Rate:
                            <input 
                                type="number" 
                                value={silverRate} 
                                onChange={(e) => setSilverRate(e.target.value)} 
                                required 
                            />
                        </label>
                        <br />
                        <button type="submit">Update Rates</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            )}
        </div>
    );
};

export default AdminPage;
