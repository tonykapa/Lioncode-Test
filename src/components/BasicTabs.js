import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ControlledAccordions from '../components/ControlledAccordions';
import style from '../pages/TopicsPage.module.css'
import { useState, useContext } from 'react';
import { DataContext } from '../app-context/context.js'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      id: eventData.event.id,
      topics: eventData.topics,
    }
  }
  );


  return (
    <Box sx={{ width: '100%', padding: '0' , marginBottom : '10rem' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Schedule" {...a11yProps(0)} />
          <Tab label="TAB1" {...a11yProps(1)} />
          <Tab label="TAB2" {...a11yProps(2)} />
          <Tab label="TAB3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {transformedEvents &&
          transformedEvents.map(data => {
            if (+props.id === data.id) {
              return (
                <div key={data.id} className={style.accordionWrapper}>
                  {data.topics.map((topic,index) => {
                    return (<ControlledAccordions
                      lessons={topic.topic_content.lessons}
                      id={topic.id}
                      title={topic.topic_name}
                      key={index}
                    />)
                  }
                  )}
                </div>
              )
            }else return null
          })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        TAB1
      </TabPanel>
      <TabPanel value={value} index={2}>
        TAB2
      </TabPanel>
      <TabPanel value={value} index={3}>
        TAB3
      </TabPanel>
    </Box>
  );
}