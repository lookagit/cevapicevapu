import React from 'react';
import css from '../../styles.css';

export default class TopHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: false,
      title: false,
      subtitle: false,
    }
  }
  componentWillMount() {
    if(this.props.bgImage && this.props.title && this.props.subtitle) {
      const subtitle = this.props.subtitle;
      const title = this.props.title;
      const bgImage = this.props.bgImage;
      this.setState({
        bgImage: bgImage,
        title: title,
        subtitle: subtitle,
      });
    } else {
      this.setState({
        bgImage: {},
        title: "Ne postoji strana",
        subtitle: "404",
      });
    }
  }
  render() {
    return(
      <div className={css.topHero} style={this.state.bgImage}>
        <div className={css.topHeroInner}>
          <h2 className={css.topHeader}>{this.state.title}</h2>
          <h4 className={css.topSubHeader}>{this.state.subtitle}</h4>
        </div>
      </div>
    );
  }
}
