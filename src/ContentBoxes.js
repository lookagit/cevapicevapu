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
              <p style={{textAlign: "justify"}}>
              Kada smo 2014. godine, nas nekoliko prijatelja razgovarali o otvaranju zajedničkog malog restorana izbor ćevapa se sam nametnuo.
              Srpska tradicionalna hrana koju gotovo svi vole, a čijim kvalitetom po prestoničkim restoranima nismo uopšte bili srećni. Sećala
              nas je nostalgija mirisa ćevapčića iz detinjstva i pomislili smo: "Može to bolje".
              Krenuli smo u misiju: "Ćevapi kao nekad"... i eto. Nekoliko godina kasnije, osmesi na licima, popunjeni stolovi i komentari sa
              interneta nam govore da smo uspeli... Na vama je da presudite.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
          <img src="/belo-meso-na-rostilju.jpg" style={{width: "100%", height: "100%"}}/>
          </Col>
          <Col xs={12} sm={6}>
          <img src="/rolovano-drama-rostilj.jpg" style={{width: "100%", height: "100%"}}/>
          </Col>
          <Col xs={12}>
            <h2 style={{textAlign: "center"}}>VAS IZBOR</h2>
            <h3 style={{textAlign: "center"}}>Ko bi to radio da nije nas</h3>
            <h3 style={{textAlign: "center"}}> Samo kod nas po najpovoljnijim cenama možete da uživate u vrhunskom ukusu i garantovanom kvalitetu. Vaš izbor je naša stvar. Uvek smo tu za vas. Hranite se zdravo i ukusno.</h3>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}
