import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles }) => {
  return (  
    <Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        { muscles.map(group => 
            <Tab label={group} key={group} />
        ) }
      </Tabs>
    </Paper>
  );
}
 
export default Footer;