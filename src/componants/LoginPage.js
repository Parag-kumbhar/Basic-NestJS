// import React from "react";

// const LoginPage = () => {

//   return (
//     <div>
//       <div>
//         <h3>Login</h3>
//         <form>
//           <div>
//             <label>Username</label>
//             <input
//               type="text"
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               required
//             />
//           </div>
//           <button type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         throw new Error("Invalid credentials");
//       }

//       const data = await response.json();
//       localStorage.setItem("token", data.access_token);
//       localStorage.setItem("userId", data.userId);
//       alert("Login successful!");
//       window.location.href = "/";
//     } catch (error) {
//       alert("Login failed: " + error.message);
//     }
//   };

//   return (
//     <div>
//       <h3>Login</h3>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      // localStorage.setItem("username", data.username); // Store username
 
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("userId", data.userId);
      alert("Login successful!");
      window.location.href = "/";
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <Link to="/RegistrationPage" className="text-decoration-none">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
