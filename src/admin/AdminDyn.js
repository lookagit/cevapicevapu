import React from 'react';
import {Grid, Row} from 'react-styled-flexboxgrid';
import ProizvodList from './ProizvodList';
import Porudzbine from './Porudzbine';

const AdminDyn = () => (
  <Grid>
    <Row>
      <Porudzbine />
      <ProizvodList />
    </Row>
  </Grid>
)
export default AdminDyn;