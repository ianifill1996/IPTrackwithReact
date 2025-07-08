import React from 'react';
import './IPDetails.css';
import iconLocation from '/assets/icon-location.svg';

function IPDetails({ data }) {
  return (
    <div className="ip-details">
      <div className="detail-card">
        <h4>IP Address</h4>
        <p>{data.query}</p>
      </div>
      <div className="detail-card">
        <h4>Location</h4>
        <p>{data.city}, {data.regionName}, {data.country}</p>
      </div>
      <div className="detail-card">
        <h4>Timezone</h4>
        <p>{data.timezone}</p>
      </div>
      <div className="detail-card">
        <h4>ISP</h4>
        <p>{data.isp}</p>
      </div>
    </div>
  );
}

export default IPDetails;