import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import IPDetails from './components/IPDetails';
import MapView from './components/MapView';
import patternBgDesktop from './assets/pattern-bg-desktop.png';
import patternBgMobile from './assets/pattern-bg-mobile.png';
import './index.css';

const DEFAULT_IP = 'json';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [bg, setBg] = useState(
    typeof window !== 'undefined' && window.innerWidth > 768
      ? patternBgDesktop
      : patternBgMobile
  );

  // Update background image on window resize
  useEffect(() => {
    const handleResize = () => {
      setBg(window.innerWidth > 768 ? patternBgDesktop : patternBgMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchIP = async (ipOrDomain = DEFAULT_IP) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://ip-api.com/json/${ipOrDomain}`);
      const result = await response.json();
      if (result.status === 'fail') throw new Error(result.message);
      setData(result);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  const handleSearch = (value) => {
    if (!value.trim()) return setError('Please enter an IP address or domain.');
    fetchIP(value.trim());
  };

  return (
    <div className="app">
      <header className="app-header" style={{ backgroundImage: `url(${bg})` }}>
        <h1>IP Address Tracker</h1>
        <SearchBar onSearch={handleSearch} loading={loading} />
      </header>

      {error && <div className="error">⚠️ {error}</div>}
      {data && !loading && <IPDetails data={data} />}

      {data && !loading && data.lat && data.lon && (
        <MapView
          lat={data.lat}
          lon={data.lon}
          location={`${data.city}, ${data.regionName}`}
        />
      )}
    </div>
  );
}

export default App;
