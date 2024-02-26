import React from 'react'
import cry from './cry.png'
const Error = ({weather}) => {
  return (
    <div>
        {weather.cod === '404' ? <div> <img src={cry} alt="img" width="290px" />  Нет такого города </div>  : <div> <img src={cry} alt="img" width="290px" />  Введите название города</div>
        }

        
    </div>
  )
}

export default Error
