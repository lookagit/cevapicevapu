import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import css from './styles.css';
export default class ContentBoxes extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div style={{backgroundImage:"url('https://res.cloudinary.com/drama/image/upload/c_scale,q_39,w_1117/v1513947423/Pozadina2_eqdfqq.jpg')",backgroundSize:'cover'}}>
      <Grid>
        <Row className={css.rowTwo} style={{padding: '0 0 60px 0'}}>
          <Col xs={12} sm={8} smOffset={2} >
            <div className={css.tekstTwo}>
              <p style={{textAlign: "justify"}}>
              Kada smo 2014. godine, nas nekoliko prijatelja razgovarali o otvaranju zajedničkog malog restorana izbor ćevapa se sam nametnuo.
              Srpska tradicionalna hrana koju gotovo svi vole, a čijim kvalitetom po prestoničkim restoranima nismo uopšte bili srećni, sećala
              nas je nostalgija mirisa ćevapčića iz detinjstva i pomislili smo: "Može to bolje".
              Krenuli smo u misiju: "Ćevapi kao nekad"... i eto. Nekoliko godina kasnije, osmesi na licima, popunjeni stolovi i komentari sa
              interneta nam govore da smo uspeli... Na vama je da presudite.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
          <img src="https://res.cloudinary.com/drama/image/upload/c_scale,q_65,w_414/v1513959811/drama-cevapi-napolju_dkrhf5.jpg" style={{width: "100%", height: "100%"}}/>
          </Col>
          <Col xs={12} sm={6}>
          <img src="https://res.cloudinary.com/drama/image/upload/c_scale,q_47,w_421/v1513959944/drama-cevap-specijal-basta_ejnzyt.jpg" style={{width: "100%", height: "100%"}}/>
          </Col>
          <Col xs={12}>
            <h2 style={{textAlign: "center"}}>VAŠ IZBOR</h2>
            <h3 style={{textAlign: "center"}}> Samo kod nas po najpovoljnijim cenama možete da uživate u vrhunskom ukusu i garantovanom kvalitetu. Vaš izbor je naša stvar. Uvek smo tu za vas. Hranite se zdravo i ukusno.</h3>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}
