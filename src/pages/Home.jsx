import React from 'react'
import welcome from '../assets/home_welcome.webp'
import couple from '../assets/home_couple.webp'
import ministry from '../assets/home_ministry.webp'
import sunday from '../assets/home_sunday.webp'
import ladies from '../assets/home_ladies.webp'
import mens from '../assets/home_mens.webp'
import youth from '../assets/home_youth.webp'
import worship from '../assets/home_worship.webp'
import Ministries from '../components/Ministries'


const Home = () => {
  return (
    <>
        <img src={welcome} />
        <img src={couple} />
        <img src={ministry} />
        <div>
            <Ministries image={sunday} time={'SUNDAY @ 10:30AM'} title={'Sunday Service'} location={'Virtual Access'}/>
            <Ministries image={ladies} time={'Thursdays @ 7pm - 8pm'} title={'Ladies Lifegroup'} location={'Virtual Access'}/>
            <Ministries image={mens} time={'Thursdays @ 7pm - 8pm'} title={'Men\'s Lifegroup'} location={'Virtual Access'}/>
            <Ministries image={youth} time={''} title={'Youth Lifegroup'} location={'In Person'}/>
            <Ministries image={worship} time={'Sundays @ 8:30am'} title={'Worship Team'} location={'In Person'}/>
        </div>
    </>
  )
}

export default Home