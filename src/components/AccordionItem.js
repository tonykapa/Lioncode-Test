import React from 'react'
import style from './AccordionItem.module.css'
import calendar from '../assets/calendar.png'
import clock from '../assets/clock.png'
import location from '../assets/location.png'
import profile from '../assets/profile.png'


const AccordionItem = (props) => {


    return (
        
        const transformTime = dateString => {
          const date = new Date(dateString)
          const time = date.toTimeString().slice(0, 5);  
          return time
        }
        
        <ul className={style.lessonul}>
            {props.lessons.map((lesson) => {
                return (
                    <li key={lesson.title}>
                        <div className={style.lessonliwrapper}>
                            <h2>
                                {lesson.title}
                            </h2>
                            <div className={style['lesson-info']}>
                                <span><img src={clock} alt='clock-icon' />&nbsp;{transformTime(lesson.time_starts)}</span>
                                <span><img src={calendar} alt='calendar-icon' />&nbsp;{lesson.date}</span>
                                <span><img src={location} alt='location-icon' />&nbsp;Address </span><img src={profile} alt='profile'/>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default AccordionItem
