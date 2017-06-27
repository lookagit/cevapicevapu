import React from 'react';
import scss from './styles.scss';
class SectionHeadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      innerText: "",
    }
  }
  componentWillMount() {
    const title = this.props.title;
    const innerText = this.props.innerText;
    if(!innerText) {
      this.setState({
        title,
      });
    } else {
      this.setState({
        title,
        innerText,
      })
    }
  }
  render() {
    return (
      <div className={scss.sectionHeadlineMain}>
        <h1 className={scss.sectionHeadlineTitle}>{this.state.title}</h1>
        <p className={scss.sectionHeadlineInnerText}>{this.state.innerText}</p>
      </div>
    );
  }
}
export default SectionHeadline;
