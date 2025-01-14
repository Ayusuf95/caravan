import React from 'react';
import {externalLink} from "../utils";

// Components
import { Grid, Box } from '@material-ui/core';

// Assets
const logo = require('../images/logo.png');

const Footer = () => (
  <Box mt={2}>
    <hr />
    <Grid container alignItems="center">

      <Grid item sm={2}>
        {externalLink(
          'https://www.unchained-capital.com',
          <img
            src={logo}
            className="logo"
            alt="Unchained Capital logo"
            height="32" />
        )}
      </Grid>

      <Grid item  sm={6}>
        <p>Copyright 2019 by Unchained Capital and released under an MIT license.</p>
      </Grid>

    </Grid>

  </Box>


);

export default Footer;
