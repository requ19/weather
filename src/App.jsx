import React, { useState } from 'react';
import Form from "./components/Form";
import Weather from './components/Weather';
import Error from './components/Error'
import './App.css'
import obl from './img/clouds-transparent-background-m.png'
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  return (
    <>
    <img className='obl' src={obl} alt="obl" width="200px" />

    <div className="app">
      <Form city={city} setCity={setCity} weather={weather} setWeather={setWeather} />
      {
        weather && weather.cod !== 200 
        ?
        <Error weather={weather} />
        :
        <Weather weather={weather} />
      }
    </div>

    </>
  );
}

export default App;


// rafce