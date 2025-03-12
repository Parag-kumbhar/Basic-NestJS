// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RegistrationPage from "./componants/RegistrationPage";
// import LoginPage from "./componants/LoginPage";
// import HomePage from "./componants/HomePage";

// function App() {
//   const isToken = localStorage.getItem('token');
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/" element={isToken? <HomePage /> : <LoginPage/> } />
//         <Route path="/RegistrationPage" element={<RegistrationPage />} />
//       </Routes>
//     </Router>  
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegistrationPage from "./componants/RegistrationPage";
import LoginPage from "./componants/LoginPage";
import HomePage from "./componants/HomePage";
import EditPage from "./componants/EditPage";
import Navbar from "./componants/Navbar";

function App() {
  const isToken = localStorage.getItem("token");

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={isToken ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
