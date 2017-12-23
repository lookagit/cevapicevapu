import React from 'react';
import css from '../../styles.css';
import scss from '../../styles.scss';
class HeaderHero extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <div className={css.heroHomepage} style={{backgroundImage: 'url("https://res.cloudinary.com/drama/image/upload/c_scale,h_909,q_40/v1513947397/kover-drama_rullwx.jpg")'}}>
       </div>
      </div>
    );
  }
}
export default HeaderHero;
