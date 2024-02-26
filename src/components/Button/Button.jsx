import React from 'react'
import './Button.css'
const Button = ({setWeather, city}) => {
    const submitHandler = (e) => {
        e.preventDefault();
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=345a958c77bfcf556fe98f331878e3af`)
          .then(res => res.json())
          .then(data => console.log( setWeather(data)))
          .catch(error => {console.error(error)})
      };

  return (
    <div>
        <button className='btn' onClick={submitHandler}>Search</button>
    </div>
  )
}

export default Button
