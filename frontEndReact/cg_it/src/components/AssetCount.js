// changed by nittessh

import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://65.1.76.20/asset/details')
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
      <h3>Total Assets</h3>
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
