import React from 'react';
import {Grid, Row} from 'react-styled-flexboxgrid';

export default class Proizvod extends React.PureComponent {
  render() {
    return(
      <Grid>
        <Row>
          <div style={{display: 'flex',}}>
            <div style={{margin: '0 auto', width: '100%'}}>
              <h1>Dostava trenutno ne radi</h1>
              <h3>Radno vreme dostave:</h3>
              <p>Ponedeljak-Subota: od 11:00 do 20:00</p>
              <p>Nedeljom ne radimo</p>
            </div>
          </div>
        </Row>
      </Grid>
    );
  }
}
