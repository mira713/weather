import React,{ useContext, useEffect, useState } from 'react';

import { weatherContext } from '../context/context';
import SingleCart from './singleCart';

const Weekinfo = () => {
    let {state,setState} = useContext(weatherContext);
    let {daily} = state;
    let [selectedCard, setSelectedCard] = useState(0)

    let updateCurrent=()=>{
        let select = daily? daily[selectedCard] : 0
        return (
            setState({
                type:"SET_CURRENT",
                payload : select
            })
        )
    }

    useEffect(()=>{
        updateCurrent();
    },[daily,selectedCard])
  return (
    <div>
        <div className="cardWrap">
            <ul className="cardList">
               {
                daily && daily.length>0 ? daily.map((item,ind)=>{
                    if(ind<7){
                        return(
                            <SingleCart item={item} className={ind==selectedCard?"active":''} onClick={()=>{setSelectedCard(ind);updateCurrent()}}/>
                          )
                    }
                }) : ""
               }
            </ul>
        </div>
    </div>
  )
}

export default Weekinfo