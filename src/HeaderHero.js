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
       <div className={css.heroHomepage} style={{backgroundImage: 'url("/kover-drama.jpg")'}}>
       </div>
      </div>
    );
  }
}
export default HeaderHero;
