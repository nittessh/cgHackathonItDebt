import React, { useState, useEffect } from 'react';

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

  const shouldHighlightRow = (currentRow, index) => {
    // Check if the category is repeated in the data array
    const isRepeated = data.slice(0, index).some((otherRow) => otherRow.category === currentRow.category);
    return isRepeated;
  };

  return (
    <div className='data' align="center">
      <h1>Licenses Available</h1>
      <table border="1" cellSpacing="0" cellPadding="5">
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
            <tr
              key={currentRow.asset_id}
              style={shouldHighlightRow(currentRow, currentIndex) ? { background: 'yellow' } : null}
            >
              <td>{currentRow.asset_id}</td>
              <td>{currentRow.assetName}</td>
              <td>{currentRow.provisionDate}</td>
              <td>{currentRow.patchedDate}</td>
              <td>{currentRow.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/><br/>
    </div>
  );
};

export default DisplayAssetDetails;
