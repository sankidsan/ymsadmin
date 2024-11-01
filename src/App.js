import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar'; // Adjust the path if necessary
import AdminPage from './components/AdminPage'; // Your AdminPage component
import './App.css'; // Include any styles specific to the admin interface

function App() {
    return (
        <Router>
            <div className="AdminApp">
                <AdminNavbar /> {/* Render the admin navbar */}
                <Routes>
                    {/* Admin page route */}
                    <Route path="/" element={<AdminPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminPage from './components/AdminPage';

// function App() {
//     return (
//        <Router>
//             <Routes>
//                 {/* Default route for the home page */}
//                 <Route path="/" element={<h1>Welcome to the Home Page</h1>} />

//                 {/* Admin page route */}
//                 <Route path="/admin" element={<AdminPage />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
