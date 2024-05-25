import styles from '../styles/Signup.css';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';


const Signin = () => {
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.email) errors.email = 'Email est requis';
    if (!formData.password) errors.password = 'Mot de passe est requis';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulaire envoyé', formData);

    }
  };

  return (
    <div className="signup-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Connexion</button>

      </form>
      <p>
        vous n'avez pas de compte? Cliquez <Link to='/Signup'>
          <span>
            ici
          </span>

        </Link>

      </p>
    </div>
  );
};

export default Signin;
