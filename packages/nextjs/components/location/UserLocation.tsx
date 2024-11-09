import { useState, useEffect } from 'react';
import useGeolocation from '../../hooks/webhooks/useGeoLocation'; // Adjust path if needed

const LocationComponent = () => {
  const { location, error } = useGeolocation(); // Use the custom hook

  // Render loading state or error messages if any
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (location.latitude === null || location.longitude === null) {
    return <div>Loading location...</div>;
  }

  // Render the location once it's available
  return (
    <div>
      <h2>Your Location</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
};

export default LocationComponent;
