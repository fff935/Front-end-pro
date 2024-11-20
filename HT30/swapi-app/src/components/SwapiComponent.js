import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSwapiData } from '../redux/swapiThunks';
import { clearData } from '../redux/swapiSlice';

const SwapiComponent = () => {
  const BASE_URL = 'https://swapi.py4e.com/api/';
  const [endpoint, setEndpoint] = useState('people/1');
  const dispatch = useDispatch();
  const swapiData = useSelector((state) => state.swapi.data);
  const loading = useSelector((state) => state.swapi.loading);
  const error = useSelector((state) => state.swapi.error);

  const handleFetch = () => {
    const fullUrl = `${BASE_URL}${endpoint}`;
    dispatch(fetchSwapiData(fullUrl));
  };

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
    <div>
      <h1>SWAPI</h1>
      <input
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="Enter API endpoint (e.g., people/1)"
        style={{ width: '400px', marginBottom: '10px' }}
      />
      <button onClick={handleFetch}>Fetch Data</button>
      <button onClick={handleClear}>Clear Data</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {swapiData && <pre>{JSON.stringify(swapiData, null, 2)}</pre>}
    </div>
  );
};

export default SwapiComponent;
