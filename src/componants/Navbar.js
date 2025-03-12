// //   import React, { useEffect, useState } from "react";    
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //     const [user, setUser] = useState(null);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         const userId = localStorage.getItem("userId");
// //         const token = localStorage.getItem("token");

// //         if (!userId || !token) {
// //             navigate("/login");   
// //             return;
// //         }

// //         fetch(`http://localhost:5000/users/${userId}`, {
// //             headers: { Authorization: `Bearer ${token}` },
// //         })
// //             .then((response) => response.json())
// //             .then((data) => setUser(data)) 
// //             .catch((error) => console.error("Error fetching user:", error));
// //     }, [navigate]);

// //     // Logout Function
// //     const handleLogout = () => {
// //     localStorage.clear(); // Remove token & userId
// //     navigate("/login"); // Redirect to login
// //   };
    

// //     return (
// //         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// //             <div className="container">
// //                 <h3 className="navbar-brand">
// //                     {user ? `Hello ${user.firstName}...` : "Loading..."}
// //                 </h3>

// //                 {/* Navbar Toggler Button for Small Screens */}
// //                 <button 
// //                     className="navbar-toggler" 
// //                     type="button" 
// //                     data-bs-toggle="collapse" 
// //                     data-bs-target="#navbarNav"
// //                     aria-controls="navbarNav" 
// //                     aria-expanded="false" 
// //                     aria-label="Toggle navigation"
// //                 >
// //                     <span className="navbar-toggler-icon"></span>
// //                 </button>

// //                 <div className="collapse navbar-collapse" id="navbarNav">
// //                     <ul className="navbar-nav ms-auto">
                        
// //                         <li className="nav-item">
// //                             <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
// //                         </li>
// //                     </ul>
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default Navbar;



// import React, { useEffect, useState } from "react";    
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const userId = localStorage.getItem("userId");
//         const token = localStorage.getItem("token");

//         if (!userId || !token) {
//             navigate("/login");   
//             return;
//         }

//         fetch(`http://localhost:5000/users/${userId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         })
//             .then((response) => response.json())
//             .then((data) => setUser(data)) 
//             .catch((error) => console.error("Error fetching user:", error));
//     }, [navigate]);

//     // Logout Function
//     const handleLogout = () => {
//         localStorage.clear(); // Remove token & userId
//         navigate("/login"); // Redirect to login
//         closeHamburger(); // Close hamburger on logout
//     };

//     // Function to close the hamburger menu when a link is clicked
//     const closeHamburger = () => {
//         const navbarToggler = document.querySelector(".navbar-toggler");
//         const navbarCollapse = document.querySelector(".navbar-collapse");
        
//         if (navbarToggler && navbarCollapse.classList.contains("show")) {
//             navbarToggler.click(); // Simulates a click to close the hamburger
//         }
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container">
//                 <h3 className="navbar-brand">
//                     {user ? `Hello ${user.firstName}...` : "Loading..."}
//                 </h3>

//                 {/* Navbar Toggler Button for Small Screens */}
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     data-bs-toggle="collapse" 
//                     data-bs-target="#navbarNav"
//                     aria-controls="navbarNav" 
//                     aria-expanded="false" 
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/" onClick={closeHamburger}>Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/register" onClick={closeHamburger}>Register</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




import React, { useEffect, useState } from "react";    
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
            setUser(null); // Ensure user state is null
            return;
        }

        fetch(`http://localhost:5000/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => setUser(data)) 
            .catch((error) => console.error("Error fetching user:", error));
    }, []);

    // Logout Function
    const handleLogout = () => {
        localStorage.clear(); // Remove token & userId
        setUser(null); // Remove user state
        navigate("/login"); // Redirect to login
    };

    // Function to close the hamburger menu when a link is clicked
    // const closeHamburger = () => {
    //     const navbarToggler = document.querySelector(".navbar-toggler");
    //     const navbarCollapse = document.querySelector(".navbar-collapse");
        
    //     if (navbarToggler && navbarCollapse.classList.contains("show")) {
    //         navbarToggler.click(); // Simulates a click to close the hamburger
    //     }
    // };

    // ✅ If user is NOT logged in, don't render the navbar
    if (!user) return null;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <h3 className="navbar-brand">
                    {user ? `Hello ${user.firstName}...` : "Loading..."}
                </h3>

                {/* Navbar Toggler Button for Small Screens */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeHamburger}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register" onClick={closeHamburger}>Register</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
