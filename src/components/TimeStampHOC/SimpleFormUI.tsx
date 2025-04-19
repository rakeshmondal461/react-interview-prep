import React, { useState } from "react";

function SimpleFormUI({ message, timestamp }: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Clear form after submit (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
        <h2>Contact Form</h2>
        <p>{message}</p>
        <small>Received at: {timestamp}</small>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Message:</label>
            <br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              style={{ width: "100%" }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SimpleFormUI;
