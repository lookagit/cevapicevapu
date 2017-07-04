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
        <h1 style={{textAlign: 'center',textTransform: 'uppercase',margin: '60px 0'}}>Pogledajte nasu jedinstvenu ponudu i uzivajte</h1>
        <Row style={{padding: '0'}}>
          <Col xs={12} sm={4} lg={4}>
           <div style={{width:'100%', height:'300px', backgroundImage: "url('/drama-cevapi-menu-drugi.jpg')",boxShadow: '1px 3px 15px rgba(0,0,0,.26)',backgroundPosition: 'center center',backgroundSize:'cover'}}>
           </div>
           <h2 style={{marginTop: '10px', marginBottom: '0'}}>Pljeskavica Drama</h2>
           <p style={{marginTop: '5px', marginBottom: '0'}}>Sastojci: 100% junece meso</p>
           <p style={{marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold'}}>Cena: 330rsd</p>
          </Col>
          <Col xs={12} sm={4}  lg={4}>
           <div style={{width:'100%', height:'300px', backgroundImage:  "url('/drama-cevapi-menu-drugi.jpg')",boxShadow: '1px 3px 15px rgba(0,0,0,.26)',backgroundPosition: 'center center',backgroundSize:'cover'}}>
           </div>
           <h2 style={{marginTop: '10px', marginBottom: '0'}}>Pljeskavica Drama</h2>
           <p style={{marginTop: '5px', marginBottom: '0'}}>Sastojci: 100% junece meso</p>
           <p style={{marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold'}}>Cena: 330rsd</p>
          </Col>
          <Col xs={12} sm={4} lg={4}>
           <div style={{width:'100%', height:'300px', backgroundImage:  "url('/drama-cevapi-menu-drugi.jpg')",boxShadow: '1px 3px 15px rgba(0,0,0,.26)',backgroundPosition: 'center center',backgroundSize:'cover'}}>
           </div>
           <h2 style={{marginTop: '10px', marginBottom: '0'}}>Pljeskavica Drama</h2>
           <p style={{marginTop: '5px', marginBottom: '0'}}>Sastojci: 100% junece meso</p>
           <p style={{marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold'}}>Cena: 330rsd</p>
          </Col>
        </Row>
        <Row style={{padding: '60px 0 60px 0'}}>
          <Col xs={12} sm={4} lg={4}>
           <div style={{width:'100%', height:'300px', backgroundImage: "url('/pljeskaPngZaMenu.png')",backgroundPosition: 'center center',backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
           </div>
           <p style={{marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold',textAlign: 'center', fontSize: '30px',marginBottom: '0'}}>Cena: 330rsd</p>
           <h2 style={{marginTop: '10px', marginBottom: '0',fontWeight:'900',textAlign:'center'}}>Pljeskavica Drama</h2>
           <p style={{marginTop: '5px', marginBottom: '0',textAlign: 'center'}}>100% junece meso, 300gr.</p>
          </Col>
          <Col xs={12} sm={4} lg={4}>
           <div style={{width:'100%', height:'300px', backgroundImage: "url('/pljeskaPngZaMenu.png')",backgroundPosition: 'center center',backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
           </div>
           <p style={{marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold',textAlign: 'center', fontSize: '30px',marginBottom: '0'}}>Cena: 330rsd</p>
           <h2 style={{marginTop: '10px', marginBottom: '0',fontWeight:'900',textAlign:'center'}}>Pljeskavica Drama</h2>
           <p style={{marginTop: '5px', marginBottom: '0',textAlign: 'center'}}>100% junece meso, 300gr.</p>
          </Col>
          <Col xs={12} sm={4} lg={4}>
           <div style={{width:'100%', height:'300px', backgroundImage: "url('/pljeskaPngZaMenu.png')",backgroundPosition: 'center center',backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
           </div>
           <p style={{marginTop: '5px', textAlign: 'right', color: 'orange', fontWeight: 'bold',textAlign: 'center', fontSize: '30px',marginBottom: '0'}}>Cena: 330rsd</p>
           <h2 style={{marginTop: '10px', marginBottom: '0',fontWeight:'900',textAlign:'center'}}>Pljeskavica Drama</h2>
           <p style={{marginTop: '5px', marginBottom: '0',textAlign: 'center'}}>100% junece meso, 300gr.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
