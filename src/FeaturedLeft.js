import React from 'react';
import css from './styles.css';
class FeaturedLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{display: "flex"}}>
        <div className={css.featured}>
          <div className={css.featuredLeftImage} style={{backgroundImage: "url('pleska.jpg')"}}></div>
          <div className={css.featuredLeftText}>
            <h2>
              Osetite duh Sarajeva u centru Beograda
            </h2>
            <p>
              Kada se rodila ideja da otvorimo Marendu želja nam je bila da u srcu Vračara kreiramo oazu dobre atmosfere
               i sjajne hrane. Izazov je bilo na sjajnoj lokaciji kreirati nešto što će Beograđani prihvatiti kao svoje,
                a oni koji dolaze u posetu prepoznati kao kvalitetno i vredno pažnje.</p>
            <p>
            Svesni smo da je to veliki izazov i zato se trudimo da našim posetiocima ugodimo na različite načine - enterijerom, uslugom,
             kvalitetnom hranom, napicima, predivnom letnjom terasom sa pogledom na Hram Sv. Save, muzikom...
             
            </p>
            <p className={css.buttonP}>
              <a>
                Pogledajte našu ponudu
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default FeaturedLeft;
