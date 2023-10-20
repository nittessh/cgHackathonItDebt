import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Search from './components/Search';
import Recommendation from './components/Recommendation';
import DisplayAssetDetails from './components/DisplayAssetDetails';
import Header from './components/Header.js';
import DisplayLastpatch6 from './components/DisplayLastpatch6';
import DisplayFyears from './components/DisplayFyears';
import DisplayLicense from './components/DisplayLicense';

const App = () => {
  return (
    <div>
      <Header/>
      <div>   
        <Router>
          <div className="container">
            <div className='sidebar'>
              <Link to="/dashboard" className='button'>Dashboard</Link>
              <br/>
              <Link to="/search" className='button'>Search</Link>
			  <br/>
			  <Link to="/recommendation" className='button'>Recommendation</Link>
            </div>
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/search" element={<Search />} />
				<Route path="/recommendation" element={<Recommendation />} />
				<Route path="/assetDetails" element={<DisplayAssetDetails />} />
                <Route path="/Lastpatch6" element={<DisplayLastpatch6/>} />
                <Route path="/Fiveyears" element={<DisplayFyears/>} />
                <Route path="/License" element={<DisplayLicense/>} />
              </Routes>
            </div>
          </div>
        </Router>
          </div>
        <div className='footer'>
        <footer>
          <p>&copy; All Rights Reserved 2023</p>
        </footer>
        </div>
      </div>
  );
};

export default App;
