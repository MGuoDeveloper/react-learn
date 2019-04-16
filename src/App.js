import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import '../node_modules/video-react/dist/video-react.css';
import HookTest from './HookTest'
import VideoTest from './VideoTest'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>

          {items}
        </ReactCSSTransitionGroup>
        <HookTest />
        <div className="video-container">
          <VideoTest />
        </div>

        <video width="400" controls autoplay>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4" />
        </video>

      </div>
    );
  }
}

export default App;
