// changed by nittessh

/*
import React from 'react';
import jsonData from './License.json';

function License() {
  
  return (
  <div>
    {jsonData ? (
    <h3>{jsonData.length}</h3>
    ) : (
         <p>Loading data...</p>
       )}
  </div>);

  // return (
  //   <div>
  //     <h2>JSON Data Length</h2>
  //     {jsonData ? (
  //       <p>The length of the JSON data is: {jsonData.length}</p>
  //     ) : (
  //       <p>Loading data...</p>
  //     )}
  //   </div>
  // );
};

export default License;
*/


import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://65.1.76.20/asset/license')
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const itemCount = data.length;

  return (
    <div>
      <h3>Licenses Available</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{itemCount}</h3>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
