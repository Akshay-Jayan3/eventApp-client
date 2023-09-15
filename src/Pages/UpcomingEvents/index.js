import React from 'react'
import WelcomeBadge from '../../components/WelcomeBadge'
import BasicDateCalendar from '../../components/calender'

const UpcomingEvents = () => {
  return (
    <div className='main_container'><WelcomeBadge Page='UpcomingEvents'/> <BasicDateCalendar /></div>
  )
}

export default UpcomingEvents