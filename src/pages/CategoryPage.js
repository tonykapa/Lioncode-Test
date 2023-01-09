import React, { useContext } from 'react'
import style from './CategoryPage.module.css'
import location from '../assets/location.png'
import calendar from '../assets/calendar.png'
import { Link } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { DataContext } from '../app-context/context.js'


const CategoryPage = () => {

    const data = useContext(DataContext)
    
    if (!data) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }

    const transformedEvents = data.data.map((eventData) => {
        return {
            isInClass: eventData.is_inclass,
            id: eventData.event.id,
            title: eventData.event.title,
            topics: eventData.topics,
            date: eventData.date,
            city: eventData.event.event_info1.course_inclass_city
        }
    }
    );

    return (
        <section className={style.section}>
            {transformedEvents &&
                <ul className={style.ulCategory}>
                    {transformedEvents.map(data => {
                        if (data.isInClass) {
                            return (
                                <Link key={data.id} to={`/${data.id}`}>
                                    <li >
                                        <h1>{data.title}</h1>
                                        <div>
                                            <span><img src={location}
                                                alt='location icon' />
                                                {data.city}</span>
                                            <span><img src={calendar}
                                                alt='calendar icon' />
                                                {data.date}</span>
                                        </div>
                                    </li>
                                </Link>
                            )
                        }
                        return null;
                    })}
                </ul>
            }

        </section>
    )
}

export default CategoryPage