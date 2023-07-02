import profiles from '../data/berlin.json';
import { useState } from 'react';

const Facebook = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <div>
        {profiles
          .reduce((countries, profile) => {
            if (!countries.includes(profile.country)) {
              countries.push(profile.country);
            }
            return countries;
          }, [])
          .map((country) => (
            <button key={country} onClick={() => handleCountryClick(country)}>
              {country}
            </button>
          ))}
      </div>
      <div>
        {profiles.map((profile) => (
          <div
            key={profile.firstName + profile.lastName}
            className={`profile ${
              profile.country === selectedCountry ? 'selected' : ''
            }`}
          >
            <img src={profile.img} alt="fbImg" style={{ width: 200 }} />
            <p>First Name: {profile.firstName}</p>
            <p>Last Name: {profile.lastName}</p>
            <p>Country: {profile.country}</p>
            {profile.isStudent ? <p>Type: Student</p> : <p>Type: Teacher</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facebook;
