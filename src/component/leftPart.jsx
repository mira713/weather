import React, { useContext } from 'react';
import dayjs from 'dayjs';

import { weatherContext } from '../context/context';

const LeftPart = () => {

  let {state, setState}  = useContext(weatherContext);
  let {city,current} = state;

  let weekdays = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ]

  if(!current) return <div>Loading...</div>
  let weekind =dayjs.unix(current.dt).day()
  return (
    <>
      <div className="leftWrap">
        <div className="dateWrap">
          <h2>{weekdays[weekind]}</h2>
          <span className="dateDay">{dayjs.unix(current.dt).format("DD/MM/YYYY")}</span>
          <span className="locationName">{city.city?city.city:state.city}-{city.admin_name?city.admin_name:state.admin_name}-{city.country?city.country:state.country}</span>
        </div>
        <div className="weatherContainer">
        <img alt={current.moonrise} className="weathericon" src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}/>
          <h1 className="weatherTemp">{Math.round(current.temp.max)}<sup>o</sup>C</h1>
          <h3 className="weatherDesk">{current.weather[0].main}</h3>
        </div>
      </div>
    </>
  )
}

export default LeftPart