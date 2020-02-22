import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
import IterList from './IterList';


class App extends Component {
  render() {
    return (
      <div>  
         <IterList/>
        <ScrollBox ref = {(ref) => this.ScrollBox=ref}>
        </ScrollBox> 
        <button onClick = {() => this.ScrollBox.scrollToBottom()}>
          <h3>Go to Last</h3>
        </button>
      </div>
    );
  }
}

export default App;

/* props, state
css before App not in App.js , edit at child
*/