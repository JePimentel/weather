import React, { useEffect, useState } from 'react'
import './App.css'
import { WeatherCard } from './WeatherCard'
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState({})
  const [permissionError, setPermissionError] = useState('')
  const [units, setUnits] = useState(true)
  const key = 'f38796c3d397c9b3b8ea834ea7f114b8'
  console.log(units)

  const getWeather = (pos) => {
    let data = pos.coords
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=f38796c3d397c9b3b8ea834ea7f114b8&units=${units ? 'metric' : 'imperial'}`)
      .then(res => setWeather(res))
  }

  const handlePermissionError = (err) => {
    let code = err.code
    if (code === 1) {
      setPermissionError('Has denegado el acceso a tu ubicación')
    } else if (code === 2) {
      setPermissionError('Lo sentimos, ha ocurrido un error interno.')
    } else {
      setPermissionError('El tiempo de espera ha caducado, intentalo más tarde.')
    }
  }

  const getPermission = () => {
    navigator.geolocation.getCurrentPosition(getWeather, handlePermissionError, {enableHighAccuracy: true})
  }
  
  useEffect(() => {
    getPermission()
  }, [units])


  return (
    <React.Fragment>
      
       <WeatherCard weatherInfo={weather} units={units} setUnits={setUnits}/>
      
    </React.Fragment>
  )
}

export default App
