import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import css from './styles.css';
export default class ContentBoxes extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Grid>
      <h1 className={css.aboutNaslov}>KOD NAS CEVAPI IMAJU TO NESTO</h1>
        <Row className={css.rowOne}>
          <Col xs={12} sm={6} md={5} lg={4}>
            <div className={css.pleskaOne}>
              <div className={css.pleskaBgOne}></div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={7} lg={8} >
          <div className={css.pleskaTekstOne}>
            <h2>10 GODINA VRHUNSKOG ROSTILJA</h2>
            <h4>Ko bi to radio da nije nas</h4>
            <p>Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.</p>
          </div>
          </Col>
        </Row>
        <div className={css.hrDebilni}></div>
        <Row className={css.rowTwo} style={{padding: '0 0 60px 0'}}>
          <Col xs={12} sm={6} md={7} lg={8} >
            <div className={css.tekstTwo}>
              <h2>10 GODINA VREDNOG RADA</h2>
              <h4>Ko bi to radio da nije nas</h4>
              <p>Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.Creative matching and contrasting the tastes, reaserching new combos, a gastronomic intersection of sea and the land. We also prepare some things that are quite national and traditional, feel free to ask, not everything is on the menu.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={5} lg={4}>
            <div className={css.pleskaTwo}>
              <div className={css.pleskaBgTwo}></div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
