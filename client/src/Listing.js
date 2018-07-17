import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class Listing extends Component {
  render() {
    return(
      <div>
        <Grid item xs={12} sm={6}>
          <Paper>
            {this.props.listing}
          </Paper>
        </Grid>
      </div>
      )
  }
}

export default Listing;


