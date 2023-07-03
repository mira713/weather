import React from 'react'
import ChooseState from './chooseState'
import Weekinfo from './weekinfo'
import Humidity from './humidity'
import LeftPart from './leftPart'

const Home = () => {
  return (
    <div>
       <div className="homeWrap">
        <div className="weatherSection">
          <LeftPart/>
            <div className="rightSide">
                <ChooseState/><br/>
                <Weekinfo/><br/>
                <Humidity/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Home