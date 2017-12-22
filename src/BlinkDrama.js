import React from 'react';
import css from './styles.css';

class BlinkDrama extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          stylee: {
              display: 'flex'
          },
        }
      }
      ddelay = (ms) => {
        var ctr, rej, p = new Promise(function (resolve, reject) {
            ctr = setTimeout(resolve, ms);
            rej = reject;
        });
        p.cancel = function(){ clearTimeout(ctr); rej(Error("Cancelled"))};
        return p; 
      }

      componentDidMount() {
        this.ddelay(4000).then(()=>{this.setState({
            stylee: {display: 'none'}
          });});
      }

    render() {
        return(
           <div>desi tebra</div>
        );
    }
}