import React from 'react';
import css from './styles.css';
import scss from './styles.scss';
class HeaderHero extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <div className={css.heroHomepage}>
         <div className={scss.mbrArrowFloating}>
          <a href="#section1" className={scss.mbrArrowIcon}></a>
         </div>
       </div>
      </div>
    );
  }
}
export default HeaderHero;
