import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    mobileNumber: "",
    username: "",
    password: "",
    file: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await axios.post("http://localhost:5000/users/register", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Registration successful!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to register.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder=" Enter Your First Name"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder=" Enter Your Last Name"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Mobile Number */}
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="mobileNumber"
                  placeholder="Enter Your Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* File Upload */}
              <div className="mb-3">
                <label className="form-label">Upload File</label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter Your Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
