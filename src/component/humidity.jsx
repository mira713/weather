import React,{ useContext,useState,useEffect } from 'react'

import { weatherContext } from '../context/context';

const Humidity = () => {

  let {state, setState} = useContext(weatherContext);
  let {current, city} = state;
  let [uv, setUv] = useState('')

  //console.log(state,city)
  let uvLevel=(uvLevel)=>{
    if(uvLevel<=2) return setUv("Low");
    if(uvLevel<=5) return setUv("Medium");
    if(uvLevel<=7) return setUv("High");
    if(uvLevel>7) return setUv("Very High");
  }
  
  useEffect(()=>{
    if(current){
      uvLevel(Math.round(current.uvi))
    }
  },[current,city])
  return (
    <>
    {
      current?<div className='humidityWrap'>

      <div className="humidityData">
        <div className="title">UV Index</div>
        <div className="value">{Math.round(current.uvi)} ({uv})</div>
      </div>

      <div className="humidityData">
        <div className="title">Humidity</div>
        <div className="value">{current.humidity}%</div>
      </div>

      <div className="humidityData">
        <div className="title">Wind</div>
        <div className="value">{Math.round(current.wind_speed)} km/hr</div>
      </div>

      <div className="humidityData">
        <div className="title">{city.city?city.city:state.city}-{city.admin_name?city.admin_name:state.admin_name}-Population</div>
        <div className="value">{parseFloat(city.population?city.population:state.population).toLocaleString('en')}</div>
      </div>

    </div>:""
    }
    </>
  )
}

export default Humidity