// changed by nittessh

/*
import React from 'react';
import LicenseData from './License.json';
import './DisplayAssetDetails.css';

const DisplayLicense = () => {
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
          {LicenseData.map((item, index) => (
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

export default DisplayLicense;
*/

import React, { useState, useEffect } from 'react';

const shouldHighlightRow = (currentRow, otherRow) => {
    return currentRow.category === otherRow.category;
  };
  
const DisplayAssetDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://65.1.76.20/asset/license');
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
      <h1>Licenses Available</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <thead>
          <tr>
            <th>ASSET ID</th>
            <th>ASSET NAME</th>
            <th>PROVISION DATE</th>
			<th>PATCHED DATE</th>
			<th>License Category</th>
          </tr>
        </thead>
        <tbody>
          
		  
		  {data.map((currentRow, currentIndex) => (
            <tr key={currentRow.asset_id}>
              <td>{currentRow.asset_id}</td>
              <td>{currentRow.assetName}</td>
			  <td>{currentRow.provisionDate}</td>
			  <td>{currentRow.patchedDate}</td>
              <td>
			  {currentRow.category}
			  </td>
            </tr>
          ))}
		  
        </tbody>
      </table>
	  <br/><br/>
    </div>
  );
};

export default DisplayAssetDetails;

