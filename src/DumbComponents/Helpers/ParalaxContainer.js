import React from 'react';
import css from '../../styles.css';

class ParalaxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylee: {},
    }
  }
  componentWillMount() {
    if(this.props.stylee) {
      const stylee = this.props.stylee;
      this.setState({
        stylee,
      });
    } else {
      this.setState({
        stylee: {
          backgroundImage : 'url("http://www.cevabdzinica.de/wp-content/uploads/2016/02/Cevapcici-beste-in-Muenchen-mit-Ajvar-Schmand-und-Brot-in-Butter-vom-Grill-IMG_3815-e1455037381718.jpg")',
          height: '400px',
        }
      });
    }
  }
  render() {
    return (<div className={css.parallax} style={this.state.stylee}></div>)
  }
}
export default ParalaxContainer;
