import { useState, useEffect } from 'react';

// Define an interface for the location object
interface Location {
  latitude: number | null;
  longitude: number | null;
}

const useGeolocation = () => {
  // Set the initial state for location and error
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message); // Set error if permission is denied or failed
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []); // Empty dependency array means this runs only once when the component mounts

  return { location, error };
};

export default useGeolocation;
