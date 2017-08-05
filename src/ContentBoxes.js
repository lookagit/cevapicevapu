import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import css from './styles.css';
export default class ContentBoxes extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div style={{backgroundImage:"url('/Pozadina2.jpg')",backgroundSize:'cover'}}>
      <Grid>
        <Row className={css.rowTwo} style={{padding: '0 0 60px 0'}}>
          <Col xs={12} sm={8} smOffset={2} >
            <div className={css.tekstTwo}>
              <h2 style={{textAlign: "center"}}>10 GODINA VREDNOG RADA</h2>
              <h4 style={{textAlign: "center"}}>Ko bi to radio da nije nas</h4>
              <p style={{textAlign: "justify"}}>Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.</p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
          <img src="/belo-meso-na-rostilju.jpg" style={{width: "100%", height: "auto"}}/>
          <h2 style={{textAlign: "center"}}>KVALITET</h2>
          <h4 style={{textAlign: "center"}}>Ko bi to radio da nije nas</h4>
          <p style={{textAlign: "justify"}}> Samo kod nas po najpovoljnijim cenama mozete da uzivate u vrhunskom ukusu i garantovanom kvalitetu. Vas izbor je nasa stvar. Uvek smo tu za vas. Hranite se zdravo i ukusno.</p>
          </Col>
          <Col xs={12} sm={6}>
          <img src="/belo-meso-na-rostilju.jpg" style={{width: "100%", height: "auto"}}/>
          <h2 style={{textAlign: "center"}}>VAS IZBOR</h2>
          <h4 style={{textAlign: "center"}}>Ko bi to radio da nije nas</h4>
          <p style={{textAlign: "justify"}}> Samo kod nas po najpovoljnijim cenama mozete da uzivate u vrhunskom ukusu i garantovanom kvalitetu. Vas izbor je nasa stvar. Uvek smo tu za vas. Hranite se zdravo i ukusno.</p>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}
