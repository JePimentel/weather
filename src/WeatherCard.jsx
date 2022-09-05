import './App.css'

const WeatherCard = ({weatherInfo, units, setUnits}) => {
    return (
        <div className="weatherContainer">
           <section className="card">
                <span className='cardPlace'>{weatherInfo.data?.name}, {weatherInfo.data?.sys.country}</span>
                <div className="graphicWeather">
                    <picture>
                        <img src={`http://openweathermap.org/img/wn/${weatherInfo.data?.weather[0].icon}@2x.png`} alt="weather icon" />
                    </picture>
                    <p>{weatherInfo.data?.weather[0].description}</p>
                </div>
                <div className="cardInfo">
                    <p>Temperature</p>
                    <span>{weatherInfo.data?.main.temp}</span>                                        
                </div>
                <div className="cardInfo">
                    <p>Humidity</p>
                    <span>{weatherInfo.data?.main.humidity}</span>                                        
                </div>
                <div className="cardInfo">
                    <p>Min. Temperature</p>
                    <span>{weatherInfo.data?.main.temp_min}</span>                                        
                </div>
                <div className="cardInfo">
                    <p>Max. Temperature</p>
                    <span>{weatherInfo.data?.main.temp_max}</span>                                        
                </div>
                <button onClick={() => setUnits(!units)}>{units ? 'Farenheit' : 'Celsius'}</button>
            </section>
        </div>
    )
}

export { WeatherCard }