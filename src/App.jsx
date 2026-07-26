import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    theme: "Light",
  });

  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSaved(false);
  }

  function handleSave(e) {
    e.preventDefault();
    console.log("Saved settings:", formData);
    setSaved(true);
  }

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSave}>
        <h2 style={styles.heading}>Settings</h2>

        <div style={styles.field}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label htmlFor="theme">Theme</label>
          <select
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>
          Save
        </button>

        {saved && <p style={styles.success}>Settings saved!</p>}
      </form>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "350px",
  },
  heading: {
    marginTop: 0,
    marginBottom: "20px",
    textAlign: "center",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "16px",
  },
  input: {
    marginTop: "6px",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "15px",
  },
  success: {
    marginTop: "15px",
    color: "green",
    textAlign: "center",
  },
};

export default App;