import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

const Exercises = ({ exercises }) => {
  return (  
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          { exercises.map(([group, exercises]) => (
            <React.Fragment>
              <Typography variant="headline" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="nav">
              { exercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary="Trash">
                    {title}
                  </ListItemText>
                </ListItem>
              )) }
              </List>
            </React.Fragment>
          )) }
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="display1">
            Welcome!
          </Typography>
          <Typography variant="subheading" style={{ marginTop: 20 }}>
            Please select an exercise from the list on the left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
 
export default Exercises;