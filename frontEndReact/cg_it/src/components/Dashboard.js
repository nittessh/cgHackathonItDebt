import React from 'react';
import { Link } from 'react-router-dom';
import AssetCount from './AssetCount';
import Fyears from './Fyears';
import Lastpatch6 from './Lastpatch6';
import './Dashboard.css';
import License from './License';

const Dashboard = () => {
  return (
    <div className='content'>
      <h2 className="dashboard-title">Welcome to Capgemini IT Services</h2>

      <div className="analytical-boxes-container">
        <div className="analytical-box">
          <h3><AssetCount/></h3>
          <Link to="/assetdetails">
            <button>Asset Details</button>
          </Link>
        </div>

        <div className="analytical-box">
          <h3><Lastpatch6/></h3>
          <Link to="/Lastpatch6">
            <button /*className='abutton'*/>Resources at risk</button>
          </Link>
        </div>

        <div className="analytical-box">
          <h3><Fyears/></h3>
          <Link to="/Fiveyears">
            <button>Aging Asset Details</button>
          </Link>
        </div>

        <div className="analytical-box">
          <h3><License/></h3>
          <Link to="/License">
            <button>License Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
