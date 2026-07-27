import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    theme: '',
    notifications: false,
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data) {
    const errors = {};

    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }

    if (!data.email.trim()) {
      errors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = 'Enter a valid email address.';
    }

    if (!data.age.toString().trim()) {
      errors.age = 'Age is required.';
    } else {
      const ageNum = Number(data.age);
      if (Number.isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
        errors.age = 'Age must be between 18 and 100.';
      }
    }

    if (!data.theme) {
      errors.theme = 'Please select a theme.';
    }

    return errors;
  }

  const errors = validate(formData);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setSubmitted(false);
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      age: true,
      theme: true,
    });

    if (!isValid) {
      setSubmitted(false);
      return;
    }

    console.log('Submitted settings:', formData);
    setSubmitted(true);
  }

  function showError(field) {
    return touched[field] && errors[field];
  }

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <h1 style={styles.heading}>Settings</h1>

        <div style={styles.field}>
          <label htmlFor="fullName" style={styles.label}>
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!showError('fullName')}
            aria-describedby={showError('fullName') ? 'fullName-error' : undefined}
            style={styles.input}
          />
          {showError('fullName') && (
            <p id="fullName-error" role="alert" style={styles.errorText}>
              {errors.fullName}
            </p>
          )}
        </div>

        <div style={styles.field}>
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!showError('email')}
            aria-describedby={showError('email') ? 'email-error' : undefined}
            style={styles.input}
          />
          {showError('email') && (
            <p id="email-error" role="alert" style={styles.errorText}>
              {errors.email}
            </p>
          )}
        </div>

        <div style={styles.field}>
          <label htmlFor="age" style={styles.label}>
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!showError('age')}
            aria-describedby={showError('age') ? 'age-error' : undefined}
            style={styles.input}
          />
          {showError('age') && (
            <p id="age-error" role="alert" style={styles.errorText}>
              {errors.age}
            </p>
          )}
        </div>

        <div style={styles.field}>
          <label htmlFor="theme" style={styles.label}>
            Theme
          </label>
          <select
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!showError('theme')}
            aria-describedby={showError('theme') ? 'theme-error' : undefined}
            style={styles.input}
          >
            <option value="">Select a theme</option>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
          {showError('theme') && (
            <p id="theme-error" role="alert" style={styles.errorText}>
              {errors.theme}
            </p>
          )}
        </div>

        <div style={styles.checkboxField}>
          <input
            id="notifications"
            name="notifications"
            type="checkbox"
            checked={formData.notifications}
            onChange={handleChange}
            style={styles.checkbox}
          />
          <label htmlFor="notifications" style={styles.checkboxLabel}>
            Enable notifications
          </label>
        </div>

        <button type="submit" disabled={!isValid} style={isValid ? styles.button : styles.buttonDisabled}>
          Save
        </button>

        {submitted && (
          <p role="status" aria-live="polite" style={styles.success}>
            Settings saved successfully!
          </p>
        )}
      </form>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
    padding: '24px',
  },
  form: {
    backgroundColor: '#fff',
    padding: '32px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '360px',
  },
  heading: {
    marginTop: 0,
    marginBottom: '24px',
    fontSize: '22px',
    textAlign: 'center',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '18px',
  },
  label: {
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  checkboxField: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
  },
  checkbox: {
    width: '16px',
    height: '16px',
  },
  checkboxLabel: {
    fontSize: '14px',
  },
  errorText: {
    marginTop: '4px',
    marginBottom: 0,
    fontSize: '12px',
    color: '#c0392b',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  buttonDisabled: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#999',
    color: '#eee',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'not-allowed',
  },
  success: {
    marginTop: '16px',
    marginBottom: 0,
    fontSize: '14px',
    color: '#27ae60',
    textAlign: 'center',
  },
};

export default App;