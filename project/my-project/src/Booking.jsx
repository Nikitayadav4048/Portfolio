import React, { useState } from 'react';
import axios from 'axios';

const DistanceCalculator = () => {
  const [location1, setLocation1] = useState('');
  const [location2, setLocation2] = useState('');
  const [distance, setDistance] = useState(null);

  const getCoordinates = async (location) => {
    const API_KEY = '33d227969fe34f1dad9c219cd7b53b6c'; 
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${API_KEY}`);
    const data = response.data;
    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lon: lng };
    }
    return null;
  };

  const haversine = (lon1, lat1, lon2, lat2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const calculateDistance = async () => {
    const coords1 = await getCoordinates(location1);
    const coords2 = await getCoordinates(location2);

    if (coords1 && coords2) {
      const dist = haversine(coords1.lon, coords1.lat, coords2.lon, coords2.lat);
      setDistance(dist);
    } else {
      setDistance(null);
    }
  };

  return (
    <div>
      <h2>Distance Calculator</h2>
      <div>
        <label>
          Location 1:
          <input
            type="text"
            value={location1}
            onChange={(e) => setLocation1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Location 2:
          <input
            type="text"
            value={location2}
            onChange={(e) => setLocation2(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distance !== null && (
        <h3>Distance: {distance.toFixed(2)} km</h3>
      )}
    </div>
  );
};

export default DistanceCalculator;
