import React from 'react';
import {Link} from 'react-router';
import Header from '../components/Header';

class App extends React.Component {
  render(){
    let styles = {
      base: {
        topSpace: {
          marginTop: '60px'
        },
        smallTopSpace: {
          marginTop: '20px'
        }
      }
    };

    return (
      <div>
        <Header />
        <div className="container" style={styles.base.topSpace}>
          <div className="jumbotron">
            <h3>Hello World ! Buds</h3>
          </div>
          <Link className="btn btn btn-default" to={`/subroute`}>Go to subroute</Link>

          <div className="detail" style={styles.base.smallTopSpace}>
            {this.props.children}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
