import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [maxtemp, setMaxtemp] = useState(null);
  const [mintemp, setMintemp] = useState(null);
  const [pressure, setPressure] = useState(null);

  useEffect(() => {
    const getTemperature = async () => {
        const response = await fetch("http://localhost:3000/product");
        
        const data = await response.json();
        console.log(data);
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setMaxtemp(data.main.temp_max);
        setMintemp(data.main.temp_min);
        setPressure(data.main.pressure)
    };

    getTemperature();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-red-400 p-10 rounded-'>
      {
        <div>
          <p>Current Temperature: {temperature}°C</p>
          <p>current Humidity: {humidity}</p>
          <p>Maximum Tempreature: {maxtemp}</p>
          <p>Minimum Tempreature: {mintemp}</p>
          <p>Current pressure is : {pressure}</p>
        </div>
      }
      </div>
    </div>
  );
};

export default Weather;
