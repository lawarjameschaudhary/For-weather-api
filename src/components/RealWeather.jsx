import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';

const RealWeather = () => {
    const [weather, setWeather] = useState([]);

    console.log(weather);

    const getWeather = async () => {
        const response = await fetch("http://localhost:3000/product");
        const data = await response.json();
        setWeather(data);
    }

    useEffect(() => {
        getWeather();
    },[])


  return (
    <div className='flex flex-wrap '>
        {
            weather.map((item, index) => {
                return <WeatherCard data={item} />
            })
        }
    </div>
  )
}

export default RealWeather