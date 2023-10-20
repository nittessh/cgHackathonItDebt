import React, { Component } from 'react';
import './Search.css';
import axios from 'axios';

class Search extends Component {
  state = {
    assetType:'Select an Asset Type', // Default selected option
    data: [],
    filteredData: [], // Store the filtered data
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get('http://65.1.76.20/asset/details', {
        params: {
          assetType: this.state.assetType,
        },
      })
      .then((response) => {
        this.setState({ data: response.data }, () => {
          // After fetching data, filter and set filteredData
          this.filterData();
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  handleAssetTypeChange = (event) => {
    this.setState({ assetType: event.target.value }, () => {
      // After changing asset type, filter and set filteredData
      this.filterData();
    });
  }

  // Filter data based on the selected asset type
  filterData = () => {
    const { data, assetType } = this.state;
    const filteredData = data.filter((asset) => asset.assetType === assetType);
    this.setState({ filteredData });
  }

  render() {
    const { filteredData } = this.state;

    return (
		<div>
		<br/><br/><br/><br/>
      <div className="myContainer">
        <div>
        
        <select
          id="assetType"
          value={this.state.assetType}
          onChange={this.handleAssetTypeChange}
        >
          <option value="Select an Asset Type" disabled selected>Select an Asset Type</option>
          <option value="Mouse">Mouse</option>
          <option value="Laptop">Laptop</option>
          <option value="Headset">Headset</option>
          <option value="keyboard">Keyboard</option>
          <option value="desktop">Desktop</option>
          <option value="Printer">Printer</option>
          <option value="Motherboard">Motherboard</option>
          {/* Add more options as needed */}
        </select>
		
		<br/><br/>
		
        <table border="1" cellspacing="0" cellpadding="5">
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Asset Name</th>
              <th>Provision Date</th>
              <th>Patched Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((asset, index) => (
              <tr key={index}>
                <td>{asset.asset_id}</td>
                <td>{asset.assetName}</td>
                <td>{asset.provisionDate}</td>
                <td>{asset.patchedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
	  <br/><br/><br/><br/>
	  </div>
    );
  }
}

export default Search;
