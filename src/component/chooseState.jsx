import React,{ useContext, useEffect, useState }from 'react';
import cities from "../data/data.json";
import axios from 'axios';

import { weatherContext } from '../context/context';

const ChooseState = () => {
    let {state,setState} = useContext(weatherContext);
    let {city} = state;
    let [sahar, setSahar] = useState(city)
    let [lat ,setLat] = useState(state.city && state.lat? state.lat : "");
    let [long , setLong] = useState(state.city && state.lng? state.lng : "");
    let apiKey = "ce22f5f841bd19ed3c6b9a59ba4bd77d";
    let exclude='hourly,minutely'
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${apiKey}`
   

    let apiCall = () => {
        axios.get(url).then((data)=>{
            let _daily = data.data.daily;
            setState({
                type:"SET_DAILY",
                payload:_daily
            })
        })
    }

    useEffect(()=>{
        apiCall()
    },[sahar])

    function handleChange(e){
       
        let obj = cities.filter((city)=>city.city===e.target.value);
        setSahar(obj[0].city)
        setLat(obj[0].lat)
        setLong(obj[0].lng)
        //console.log("chooseState",obj[0])
        setState({
            type:"SET_CITY",
            Payload: obj[0]
        })
    }

  return (
    <div>
        <div className="stateWrap">
            <select className="stateMenu" defaultValue={city} onChange={(e)=>handleChange(e)}>
                {cities?.map((city)=>{
                    return(
                        <option key={city.lat+city.population} value={city.city}>
                            {city.city} - {city.admin_name}
                        </option>
                    )
                })}
            </select>
        </div>
    </div>
  )
}

export default ChooseState