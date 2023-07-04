import React from 'react';
import { Marker } from "react-simple-maps";
import './App.css';
import MapChart from './Map';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { latitude: null, longitude: null, hemisphere: null, errormsg: ''}

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
        },
        (error) => {
            this.setState({errormsg: error.message});
        }
    );
  }

  render() {
    if (this.state.errormsg && !this.state.latitude && !this.state.longitude) {
        return <div>Error:  {this.state.errormsg}</div>
      }
    
    if (!this.state.errormsg && this.state.latitude && this.state.longitude) {
        return (
          //-74.006, 40.7128
          <MapChart latitude={this.state.latitude} longitude={this.state.longitude} />
        // <div>
        //   <h1>{this.state.latitude}</h1>
        //   <h1>{this.state.longitude}</h1>
        // </div>
        )
    }
    else {
        return <div>Loading ...</div>
    }


  }   
}


export default App;
