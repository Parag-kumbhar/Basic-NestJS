// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function EditPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     dob: "",
//     address: "",
//     mobileNumber: "",
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     fetch(`http://localhost:5000/users/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((response) => response.json())
//       .then((data) => setUser(data))
//       .catch((error) => console.error("Error fetching user:", error));
//   }, [id]);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     try {
//       const response = await fetch(`http://localhost:5000/users/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(user),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update user");
//       }

//       alert("Profile updated successfully!");
//       navigate("/ ");
//     } catch (error) {
//       alert("Error updating profile: " + error.message);
//     }
//   };

//   return (
//     <div className="container card p-3 shadow-lg mt-3">
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">First Name</label>
//           <input type="text" name="firstName" className="form-control" value={user.firstName} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Last Name</label>
//           <input type="text" name="lastName" className="form-control" value={user.lastName} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Date of Birth</label>
//           <input type="date" name="dob" className="form-control" value={user.dob} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Address</label>
//           <input type="text" name="address" className="form-control" value={user.address} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Mobile Number</label>
//           <input type="text" name="mobileNumber" className="form-control" value={user.mobileNumber} onChange={handleChange} />
//         </div>

//         <button type="submit" className="btn btn-success">Save Changes</button>
//       </form>
//     </div>
//   );
// }

// export default EditPage;



import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    mobileNumber: "",
    file: null, // Added file state for profile photo
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:5000/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setUser({ ...user, file: e.target.files[0] }); // Save file to state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("dob", user.dob);
    formData.append("address", user.address);
    formData.append("mobileNumber", user.mobileNumber);

    if (user.file) {
      formData.append("file", user.file);
    }

    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData, // Use FormData for file upload
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      alert("Profile updated successfully!");
      navigate("/");
    } catch (error) {
      alert("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="container card p-3 shadow-lg mt-3">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" name="firstName" className="form-control" value={user.firstName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" name="lastName" className="form-control" value={user.lastName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" name="dob" className="form-control" value={user.dob} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" name="address" className="form-control" value={user.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input type="text" name="mobileNumber" className="form-control" value={user.mobileNumber} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label"> Update Profile Photo</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>

        <button type="submit" className="btn btn-success">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPage;
