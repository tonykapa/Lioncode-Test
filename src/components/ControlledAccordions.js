import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionItem from './AccordionItem';

const ControlledAccordions = props => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <>
            <Accordion expanded={expanded === props.id} onChange={handleChange(props.id)} sx={{ borderBottom: 'solid 3px white' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                    aria-controls="panel1bh-content"
                    sx={{ backgroundColor: '#838992', color: 'white', height: '39px' }}
                >
                    {props.title}
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0' }}>
                    <AccordionItem lessons={props.lessons} />
                </AccordionDetails>
            </Accordion>

        </>
    );
}

export default ControlledAccordions