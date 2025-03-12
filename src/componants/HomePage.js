// import React, { useEffect, useState } from 'react';   

// function HomePage() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userId = localStorage.getItem('userId'); // Get user ID from local storage
//     if (!userId) {
//       console.error('No user ID found');
//       return;
//     }

//     fetch(`http://localhost:5000/users/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token in request
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setUser(data))
//       .catch((error) => console.error('Error fetching user:', error));
//   }, []);

//   if (!user) {
//     return <h3>Loading...</h3>;
//   }   

//   return ( 
//     <div>
//       <h1><strong>User Profile</strong></h1>
//       <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
//         <img src={`http://localhost:5000/${user.filePath}`} alt="User Profile Photo" width="100" height="100" />
//         <h3>{user.firstName} {user.lastName}</h3>
//         <p> <strong>Date of Birth :- </strong>{user.dob}</p>
//         <p> <strong>Address :-</strong> {user.address}</p>
//         <p><strong>Mobile :-</strong> {user.mobileNumber}</p>
//       </div>
//     </div>
//   );
// }

// export default HomePage;



// import React, { useEffect, useState } from 'react';

// function HomePage() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userId = localStorage.getItem('userId'); // Get user ID from local storage
//     if (!userId) {
//       console.error('No user ID found');
//       return;
//     }

//     fetch(`http://localhost:5000/users/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token in request
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setUser(data))
//       .catch((error) => console.error('Error fetching user:', error));
//   }, []);

//   const handleDelete = async () => {
//     if (!user) return;

//     const confirmDelete = window.confirm('Are you sure you want to delete this user?');
//     if (!confirmDelete) return;

//     fetch(`http://localhost:5000/users/${user.id}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           localStorage.removeItem('userId'); // Remove user ID from storage
//           localStorage.removeItem('token'); // Remove token from storage
//           alert('User deleted successfully.');
//           window.location.href = '/'; // Redirect to home after deletion
//         } else {
//           console.error('Failed to delete user');
//         }
//       })
//       .catch((error) => console.error('Error deleting user:', error));
//   };

//   if (!user) {
//     return <h3>Loading...</h3>;
//   }

//   return (
//     <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
//       <h1><strong>User Profile</strong></h1>
//       <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
//         {user.filePath && (
//           <img 
//             src={`http://localhost:5000/${user.filePath}`} 
//             alt="User Profile Phioto" 
//             width="100" 
//             height="100" 
//             style={{ borderRadius: '50%', marginBottom: '10px' }}
//           />
//         )}
//         <h3>{user.firstName} {user.lastName}</h3>
//         <p><strong>Date of Birth:</strong> {user.dob}</p>
//         <p><strong>Address:</strong> {user.address}</p>
//         <p><strong>Mobile No:</strong> {user.mobileNumber}</p>

//         <button 
//           onClick={handleDelete} 
//           style={{ 
//             background: 'red', 
//             color: 'white', 
//             padding: '10px 15px', 
//             border: 'none', 
//             cursor: 'pointer', 
//             borderRadius: '5px', 
//             marginTop: '10px' 
//           }}
//         >
//           Delete User
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function HomePage() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     if (!userId) {
//       console.error('No user ID found');
//       navigate('/login'); // Redirect to login if not authenticated
//       return;
//     }

//     fetch(`http://localhost:5000/users/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setUser(data))
//       .catch((error) => console.error('Error fetching user:', error));
//   }, [navigate]);

//   const handleDelete = async () => {
//     if (!user) return;

//     const confirmDelete = window.confirm('Are you sure you want to delete this user?');
//     if (!confirmDelete) return;

//     fetch(`http://localhost:5000/users/${user.id}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           localStorage.clear(); // Clear all stored data
//           alert('User deleted successfully.');
//           navigate('/login'); // Redirect to login page
//         } else {
//           console.error('Failed to delete user');
//         }
//       })
//       .catch((error) => console.error('Error deleting user:', error));
//   };

//   const handleLogout = () => {
//     localStorage.clear(); // Remove token and user data
//     alert('Logged out successfully.');
//     navigate('/login'); // Redirect to login page
//   };

//   if (!user) {
//     return <h3>Loading...</h3>;
//   }

//   return (
//     <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
//       <h1><strong>User Profile</strong></h1>
//       <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
//         {user.filePath && (
//           <img 
//             src={`http://localhost:5000/${user.filePath}`} 
//             alt="User Profile" 
//             width="100" 
//             height="100" 
//             style={{ borderRadius: '50%', marginBottom: '10px' }}
//           />
//         )}
//         <h3>{user.firstName} {user.lastName}</h3>
//         <p><strong>Date of Birth:</strong> {user.dob}</p>
//         <p><strong>Address:</strong> {user.address}</p>
//         <p><strong>Mobile:</strong> {user.mobileNumber}</p>

//         <button 
//           onClick={handleDelete} 
//           style={{ background: 'red', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', borderRadius: '5px', margin: '10px' }}
//         >
//           Delete User
//         </button>

//         <button 
//           onClick={handleLogout} 
//           style={{ background: 'blue', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', borderRadius: '5px', margin: '10px' }}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function HomePage() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     const token = localStorage.getItem("token");

//     if (!userId || !token) {
//       navigate("/login"); // Redirect if not logged in
//       return;
//     }

//     fetch(`http://localhost:5000/users/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((response) => response.json())
//       .then((data) => setUser(data))
//       .catch((error) => console.error("Error fetching user:", error));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.clear(); // Remove token & user ID
//     alert("Logged out successfully.");
//     navigate("/login"); // Redirect to login page
//   };

//   if (!user) {
//     return <h3>Loading...</h3>;
//   }

//   return (
//     <div className="container text-center">
//       <h1>User Profile</h1>
//       <div className="card p-3 shadow-lg">
//         <img
//           src={`http://localhost:5000/${user.filePath}`}
//           alt="Profile"
//           width="100"
//           height="100"
//           style={{ borderRadius: "50%" }}
//         />
//         <h3>{user.firstName} {user.lastName}</h3>
//         <p><strong>DOB:</strong> {user.dob}</p>
//         <p><strong>Address:</strong> {user.address}</p>
//         <p><strong>Mobile:</strong> {user.mobileNumber}</p>

//         <button className="btn btn-danger mt-3" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      navigate("/login");
      return;
    }

    fetch(`http://localhost:5000/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [navigate]);

  // Logout Function
  // const handleLogout = () => {
  //   localStorage.clear(); // Remove token & userId
  //   navigate("/login"); // Redirect to login
  // };

  // Delete Function
  const handleDelete = async () => {
    const userId = localStorage.getItem("userId");
    if (!window.confirm("Are you sure you want to delete your profile?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      alert("User deleted Successfully!");
      localStorage.clear(); // Remove token & userId
      navigate("/login"); // Redirect to login
    } catch (error) {
      alert("Error deleting user: " + error.message);
    }
  };

  if (!user) {
    return <h3>Fetch Hoinaa (Backend chalu krrr)...</h3>;
  }

  return (
    <div className="container text-center">
      <h1>User Profile</h1>
      <div className="card p-3 shadow-lg mt-3">
        <img
          src={`http://localhost:5000/${user.filePath}`}
          alt="Profile"
          width="200"
          height="180"
          className="d-block mx-auto"
           style={{ borderRadius: "50%", marginBottom: '10px' }}
        />
        <h3>{user.firstName} {user.lastName}</h3>
        <p><strong>DOB:</strong> {user.dob}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Mobile:</strong> {user.mobileNumber}</p>

        <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-primary" onClick={() => navigate(`/edit/${user.id}`)}>
            Edit Profile
          </button>
          {/* <button className="btn btn-warning" onClick={handleLogout}>
            Logout
          </button> */}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
