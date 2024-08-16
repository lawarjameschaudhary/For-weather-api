import React from 'react'

const WeatherCard = (props) => {
  const weatherData = async () => {
    const response = await fetch("http://localhost:3000/main",
      {
        headers:{
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(props.data)
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <div>
        Weather data
      </div>
    <div>
    <div>Tempreature : {props.data.main.temp}°C</div>
    <div>Feels like : {props.data.main.feels_like}°C</div>
    </div>
    </div>
  )
}

export default WeatherCard