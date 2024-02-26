import React from 'react'
import cry from './cry.png'
import './Error.css'
const Error = ({weather}) => {
  return (
    <div className='error'>
        {weather.cod === '404' ? <div> <img src={cry} alt="img" width="290px" />  <p>Нет такого города</p> </div>  : <div> <img src={cry} alt="img" width="290px" /> <p> Введите название города</p></div>
        }

        
    </div>
  )
}

export default Error
