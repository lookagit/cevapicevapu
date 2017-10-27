import React from 'react';
import css from './styles.css';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import TopHero from './TopHero.js';
import FacebookSquare from 'react-icons/lib/fa/facebook-square';
import InstagramSquare from 'react-icons/lib/fa/instagram';
import YoutubeSquare from 'react-icons/lib/fa/youtube-square';
import GoogleMaps from './GoogleMaps.js';
import ReactTransitions from 'react-transitions';

var helper = require('sendgrid').mail;
export default class ContactUs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      textFromTheBottomName: "",
      textFromTheEmail: "",
      textFromSub: "",
      textFromMess: "",
      firstTimeName: false,
      firstTimeEmail: false,
      firstTimeSub: false,
      firstTimeMess: false,
      messBool: false,
      subBool: false,
      nameBool: false,
      mailBool: false,
      mess: "",
      name: "",
      mail: "",
      sub: "",
    }
  }
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }

  checkName = (e) => {
    if(e.target.value.length < 3) {
      this.setState({
        textFromTheBottomName: 'Ime mora da sadrzi vise od 3 slova.',
        nameBool: false,
      })

    } else if(!(/^[A-Za-z_.-]+[" "]*[A-Za-z_.-]+[" "]*[A-Za-z_.-]+$/.test(e.target.value))) {
      this.setState({
        textFromTheBottomName: 'Ime moze sadrzati samo slova.',
        nameBool: false,
      })
    } else {
      this.setState({
        name: e.target.value,
        nameBool: true,
        textFromTheBottomName: "",
      });
    }
  }
  checkMail = (e) => {
    if(e.target.value.length == 0) {
      this.setState({
        textFromTheEmail: 'Morate uneti tacnu e-mail adresu',
        mailBool: false,
      })
    }
    else if(!(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/).test(e.target.value)) {
      this.setState({
        textFromTheEmail: 'E-mail adresa nije validna',
        mailBool: false,
      })
    } else {
      this.setState({
        mail: e.target.value,
        mailBool: true,
        textFromTheEmail: "",
      })
    }
  }
  checkSub = (e) => {
    if(e.target.value.length < 5) {
      this.setState({
        textFromSub: 'Ovo polje mora biti duze od 5 slova. Hvala!',
        subBool: false,
      })
    } else {
      this.setState({
        textFromSub: "",
        subBool: true,
        sub: e.target.value,
      })
    }
  }
  checkMess = (e) => {
    if(e.target.value.length < 5) {
      this.setState({
        textFromMess: 'Ovo polje mora biti duze od 5 slova. Hvala!',
        messBool: false,
      })
    } else {
      this.setState({
        textFromMess: "",
        messBool: true,
        mess: e.target.value,
      })
    }
  }
  sendMess = () => {
    let name = this.state.nameBool;
    let mail = this.state.mailBool;
    let mess = this.state.messBool;
    let sub = this.state.subBool;
    if(name && mail && mess  && sub) {
      var datas = new FormData();
      datas.append( "json", JSON.stringify( {"a": "HOHOHOH"} ) );
      var myHeaders = new Headers();
      fetch("http://dramacevapi.com/page/ping",
      {
        headers: {'content-type': 'application/json'},
        method: "post",
        mode: 'cors',
        body: JSON.stringify({test: {
          mail: this.state.mail,
          name: this.state.name,
          sub: this.state.sub,
          mess: this.state.mess,
        }}),
      })
      .then(function(res){ return res.json()})
      .then( data => console.log(data))
    }
  }
  render(){
    console.log("STATE ", this.state);
    return(
      <div>
        <TopHero title="KONTAKT" subtitle=" " bgImage={{backgroundImage: 'url("/sarajevski-cevap-drama.jpg")'}} />
        <div style={{backgroundImage:'url("/pozadinadrvo.jpg")'}}>
        <Grid>
          <Row className={css.contactRowOne}>
            <Col xsOffset={1} md={10} smOffset={0} mdOffset={1}>
              <Row>
              <Col xs={12} sm={8} md={8} lg={8} className={css.contactColTwo}>
                <form>
                <p>
                  <input type="text" name="ime" placeholder="Ime" style={{border: !this.state.nameBool ? '' : '3px solid green'}} onChange={(text) => {
                    this.checkName(text);
                  }}/>
                </p>
                <p className={!this.state.nameBool ? css.boxes : css.hidees}>{this.state.textFromTheBottomName}</p>
                <p>
                  <input type="text" name="mail" placeholder="Email Adresa" style={{border: !this.state.mailBool ? '' : '3px solid green'}} onChange={(text) => {
                    this.checkMail(text);
                  }}/>
                </p>
                <p className={!this.state.mailBool ? css.boxes : css.hidees}>{this.state.textFromTheEmail}</p>
                <p>
                  <input type="text" name="subj" placeholder="Predmet"  style={{border: !this.state.subBool ? '' : '3px solid green'}} onChange={(text) => {
                    this.checkSub(text);
                  }}/>
                </p>
                <p className={!this.state.subBool ? css.boxes : css.hidees}>{this.state.textFromSub}</p>
                <p className={css.poruka}>
                  <textarea type="text" name="ime" placeholder="Poruka" style={{border: !this.state.messBool ? '' : '3px solid green'}} onChange={(text) => {
                    this.checkMess(text);
                  }} />
                </p>
                <p className={!this.state.messBool ? css.boxes : css.hidees}>{this.state.textFromMess}</p>
                <p>
                  <button className={css.posalji} type="button" onClick={this.sendMess}>POŠALJI</button>
                </p>
                </form>
              </Col>
                <Col xs={12} sm={4} md={4} lg={4} className={css.contactColOne}>
                  <h4 styles="margin:0;">INFORMACIJE</h4>
                  <h5>Adresa: </h5>
                  <p>Beograd, Ugao Dositejeve i Braće Jugović.</p>
                  <h5>Telefon:</h5>
                  <p>+381 66 449 411</p>
                  <h5>E-mail:</h5>
                  <p>info@drama.rs</p>
                  <h5>Radno Vreme:</h5>
                  <p>09:00h - 24:00h</p>
                  <p>Vikendom:</p>
                  <p> 09:00h - 01:00h</p>
                  <h5>Dostava:</h5>
                  <p>12:00 - 20:00 h</p>
                  <h5>Dostava od 20:00 do 24:00 putem kurirske službe Potrčko</h5>
                </Col>

              </Row>
            </Col>
          </Row>
        </Grid>
        <div style={{width: '100%', height: '400px'}}>
          <GoogleMaps />
        </div>
        </div>
      </div>
    );
  }
}
