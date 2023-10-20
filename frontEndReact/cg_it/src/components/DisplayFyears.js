// changed by nittessh

/*
import React from 'react';
import Fdata from './Fyears.json';
import './DisplayAssetDetails.css';

const DisplayFyears = () => {
  return (
    <div className='data'>
      <h1>Asset Details</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Asset ID</th>
            <th>Asset Name</th>
            <th>Provision Date</th>
          </tr>
        </thead>
        <tbody>
          {Fdata.map((item, index) => (
            <tr key={index}>
              <td>{item.asset_id}</td>
              <td>{item.assetName}</td>
              <td>{item.provisionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayFyears;
*/


import React, { useState, useEffect } from 'react';

const isConditionMet = (value) => {
    return value < '2016-10-03';
  };
  
const DisplayAssetDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://65.1.76.20/asset/last5Years-provision-date');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div align="center">
      <h1>Aging Asset Details</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <thead>
          <tr>
            <th>ASSET ID</th>
            <th>ASSET NAME</th>
            <th>PROVISION DATE</th>
			<th>PATCHED DATE</th>
			<th>ASSET TYPE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
			<tr
              key={item.asset_id}
              style={isConditionMet(item.provisionDate) ? { background: '#FF5733' } : null}
            >
              <td>{item.asset_id}</td>
              <td>{item.assetName}</td>
              <td>{item.provisionDate}</td>
			  <td>{item.patchedDate}</td>
			  <td>{item.assetType}</td>
            </tr>
          ))}
        </tbody>
      </table>
	  <br/><br/>
    </div>
  );
};

export default DisplayAssetDetails;

