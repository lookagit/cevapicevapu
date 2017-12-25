import React from 'react';
import TopHero from './DumbComponents/Helpers/TopHero';
import Proizvod from './Proizvod';
import Closed from './DumbComponents/NaruciDumb/Closed';
export default class NaruciNesto extends React.Component {
  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
  }
  calculateThisDate() {
    let today = new Date();
    console.log(today.getHours());
    if(today.getDay() == 0) {
      return false
    } else if(today.getDay() != 0) {
      let n = today.getHours();
      let getBack = n >= 11 && n <= 20 ? false : false;
      return getBack;
    }
  }
  render () {
    let areWeWorking = this.calculateThisDate();
    return (
      <div>
        <TopHero title="Dostava" subtitle="Cvrči, cvrči ćevap Drama, uskoro će biti s Vama" bgImage={{backgroundImage: "url('https://res.cloudinary.com/drama/image/upload/c_scale,q_58,w_1766/v1513947368/dostava_murmvd.jpg')"}} />
        {
          areWeWorking ? <Proizvod /> : <Closed />
        }
      </div>
    );
  }
}
