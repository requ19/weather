import React from 'react';
import './Weather.css'
const Weather = ({ weather }) => {
  const timeFormater = (sec) => {
    const time = new Date(sec * 1000);
    const hours = time.getHours();
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    const dateOptions = { month: 'long', day: 'numeric' };
    const formattedDate = time.toLocaleDateString(undefined, dateOptions);
    return `${formattedDate}, ${hours}:${minutes}`;
  };

  return (
    <div>
      {weather && weather.cod !== '200' ? (
        <div>
          <h4>{timeFormater(weather.dt)}</h4>
          <h1>
            {weather.name}, <span>{weather.sys.country}</span>
            {weather.description}
          </h1>
          <p className='temp'>
             {weather.weather && weather.weather[0] && (
              <img
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            )} {Math.round(weather.main.temp - 273.15)} °C
            
          </p>

          <div className="row">
            <div className="col-6">
            <div>
              Sunset: <br></br>
              {timeFormater(weather.sys.sunset)}
            </div>
            <div>
              Sunrise: <br></br>
              {timeFormater(weather.sys.sunrise)}
            </div>
            <div>
            Humidity: <br></br>
              {`${weather.main.humidity} %`}
            </div>
            </div>
            <div className="col-6">
            <div>
              Wind: <br></br>
              {`${weather.wind.speed}.0 m/s`}
            </div>
            <div>
            Pressure: <br></br>
              {`${weather.main.pressure} hPa`}
            </div>
            <div>
            feels_like: <br></br>
              {`${Math.round(weather.main.feels_like - 273.15)} °C`}
            </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
