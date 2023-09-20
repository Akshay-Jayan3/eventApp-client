import React from 'react'
import styles from './styles.module.scss'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const NewEvent = ({onclick}) => {
  return (
   <div><button onClick={onclick} className={styles.wrapper}><CalendarTodayOutlinedIcon fontSize='small'/>New Event</button></div>
   
  )
}

export default NewEvent