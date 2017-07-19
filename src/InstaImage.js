import React from 'react';
import scss from './styles.scss';
class InstaImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      srcStyle: {},
      tekst: '',
      cena: '',
    }
  }
  componentWillMount() {
    if(this.props.src && this.props.tekst) {
      this.setState({
        src: this.props.src,
        tekst: this.props.tekst,
      });
      console.log("YOYO");
    }
  }
  render() {
    return (
      <div className={scss.boxStylez}>
        <div className={scss.bsInnerInner}>
          <div style={this.state.src} className={scss.boxStylezInner}></div>
        </div>
        <h3 className={scss.bsText}>{this.state.tekst}</h3>
        <h4 className={scss.bsPrice}>330din</h4>
      </div>
    )
  }
}
export default InstaImage;
