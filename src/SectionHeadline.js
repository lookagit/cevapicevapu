import React from 'react';
import css from './styles.css';
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
      <div className={css.sectionHeadlineMain}>
        <h1 className={css.sectionHeadlineTitle}>{this.state.title}</h1>
        <p className={css.sectionHeadlineInnerText}>{this.state.innerText}</p>
      </div>
    );
  }
}
export default SectionHeadline;
