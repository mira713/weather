import { createContext, useReducer } from "react";

import { weatherReducer } from "./reducer";


export const weatherContext = createContext();

export const WeatherProvider =({children}) => {
    const [state, setState] = useReducer(weatherReducer,{
        "city": "Delhi",
        "lat": "28.6600",
        "lng": "77.2300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Delhi",
        "capital": "admin",
        "population": "29617000",
        "population_proper": "16753235"
    },)

    //console.log('context',state)
    return(
        <>
        <weatherContext.Provider value={{state,setState}}>
            {children}
        </weatherContext.Provider>
        </>
    )
}