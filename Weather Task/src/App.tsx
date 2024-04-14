import React from 'react';
import './App.css';
import CityTable from './components/Table/CityTable';
import WeatherDisplay from './components/Weather/WeatherDisplay';

function App() {
  return (
    <div>
      <CityTable/>
      <WeatherDisplay/>
    </div>
  );
}

export default App;
