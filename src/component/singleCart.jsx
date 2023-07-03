import React from 'react';
import dayjs from 'dayjs';

const SingleCart = ({item, className, onClick}) => {
  let weekdays = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ]

  let weekind =dayjs.unix(item.dt).day()
  return (
    <>
      <li key={item.moonrise} className={className} onClick={onClick}>
        <img alt={item.moonrise} className="day-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
        <span className="day-name">
          {weekdays[weekind].slice(0,3)}
        </span>
        <span className="day-temp">
          {Math.round(item.temp.max)} <sup>o</sup>C
        </span>
      </li>
    </>
  )
}

export default SingleCart