import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  render(){
    return (
      <div>
        <div>Hello World ! Buds</div>
        <Link to={`/subroute`}>Un lien man!</Link>

        <div className="detail">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
