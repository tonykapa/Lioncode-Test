import { useParams } from 'react-router-dom';
import React from 'react'
import BasicTabs from '../components/BasicTabs';


const TopicsPage = () => {
    const { topicID } = useParams()
    return (
        <>
            <BasicTabs id={topicID} />
        </>
    )
}

export default TopicsPage