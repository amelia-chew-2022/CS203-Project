import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



function samePageLinkNavigation(event) {

  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey 
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component= "a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      {...props}
    />
  );
}

// function linkSection(section){
//     return(

//     )
// }

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
        <LinkTab label="Event Details" href="#EventDetails" />
        <LinkTab label="Ticket Pricing" href="#TicketPricing" />
        <LinkTab label="Seat Map" href="#SeatMap" />
        <LinkTab label="Exchange & Refund Policy" href="#Exchange&Refund Policy" />
        <LinkTab label="Admission Policy" href="#AdmissionPolicy" />
        <LinkTab label="Ways To Buy Tickets" href="window.location#WaysToBuyTickets" />
      </Tabs>
    </Box>
  );
}