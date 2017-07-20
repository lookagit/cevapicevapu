import React from 'react';
import css from './styles.css';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import TopHero from './TopHero.js';
import FacebookSquare from 'react-icons/lib/fa/facebook-square';
import InstagramSquare from 'react-icons/lib/fa/instagram';
import YoutubeSquare from 'react-icons/lib/fa/youtube-square';
export default class ContactUs extends React.Component{
  render(){
    return(
      <div>
        <TopHero title=" " subtitle=" " bgImage={{backgroundImage: 'url("/pozadina.jpg")'}} />
        <div style={{backgroundImage:'url("/pozadinadrvo.jpg")'}}>
        <Grid>
          <Row className={css.contactRowOne}>
            <Col xsOffset={1} md={10} smOffset={0} mdOffset={1}>
              <Row>
              <Col xs={12} sm={8} md={8} lg={8} className={css.contactColTwo}>
                <form>
                <p>
                  <input type="text" name="ime" placeholder="Ime" />
                </p>
                <p>
                  <input type="text" name="ime" placeholder="Email Adresa" />
                </p>
                <p>
                  <input type="text" name="ime" placeholder="Predmet" />
                </p>
                <p className={css.poruka}>
                  <textarea type="text" name="ime" placeholder="Poruka"  />
                </p>
                <p>
                  <button className={css.posalji} type="submit">POSALJI</button>
                </p>
                </form>
              </Col>
                <Col xs={12} sm={4} md={4} lg={4} className={css.contactColOne}>
                  <h4 styles="margin:0;">INFORMACIJE</h4>
                  <h5>Adresa: </h5>
                  <p>Beograd, Dositejeva, 7</p>
                  <h5>Telefon:</h5>
                  <p>066/449-411</p>
                  <h5>E-mail:</h5>
                  <p>info@drama.rs</p>
                  <h5>Radno Vreme:</h5>
                  <p>09:00h - 24:00h</p>
                  <p>Vikendom 09:00h - 03:00h</p>
                  <h5>Dostava:</h5>
                  <p>11:00 - 19:35</p>
                </Col>

              </Row>
            </Col>
          </Row>
        </Grid>
        </div>
      </div>
    );
  }
}
