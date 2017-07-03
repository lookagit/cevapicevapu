import React from 'react';
import css from './styles.css';
class FeaturedLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{display: "flex", backgroundColor: "#f2ebe0"}}>
        <div className={css.featured}>
          <div className={css.featuredLeftImage} style={{backgroundImage: "url('pleska.jpg')"}}></div>
          <div className={css.featuredLeftText}>
            <h2>
              Osetite duh Sarajeva u centru Beograda
            </h2>
            <p>
              Society excited by cottage private an it esteems. Fully begin on by wound an.
              Girl rich in do up or both. At declared in as rejoiced of together.
              He impression collecting delightful unpleasant by prosperous as on.
              End too talent she object mrs wanted remove giving.</p>
            <p>
              Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out.
              Power is lived means oh every in we quiet. Remainder provision an in intention.
              Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.
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
