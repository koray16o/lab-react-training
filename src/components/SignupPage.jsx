import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const isEmailValid = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordStrong = () => {
    return password.length >= 8;
  };

  const getGreeting = () => {
    switch (nationality) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div>
      <label>Email: </label>
      <input type="email" value={email} onChange={handleEmailChange} />
      {email && !isEmailValid() && (
        <p style={{ color: email && !isEmailValid() ? 'red' : 'green' }}>
          Email is invalid.
        </p>
      )}

      <label>Password: </label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      {password && !isPasswordStrong() && (
        <p
          style={{
            color: password && !isPasswordStrong() ? 'red' : 'green',
          }}
        >
          Password is weak.
        </p>
      )}

      <label>Nationality</label>
      <select value={nationality} onChange={handleNationalityChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>

      <p>{getGreeting()}</p>

      <p>Your email is {email}</p>
      <button type="submit">Sign Up</button>
    </div>
  );
};

export default SignupPage;
