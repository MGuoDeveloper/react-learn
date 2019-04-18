import React from 'react'
/*

1. make sure minified production build. uglifyify,
   You can use React Developer Tools for chrome to check if the app
   is in production mode.
2. If bundle file is too big, we can split to mulitple bundle files,
   then lazy loading them.
3. Use performance tools to check 
4. Avoid Re-render and Reconciliation:
	React builds and maintains an internal represetation of the rendered UI.
	The representation lets React avoids creating DOM nodes and accessing
	existing ones beyond necessity. Virtual DOM.
	When Component props or state change, React decide whether an actual DOM
	update is necessary by comparing the newly returned element with the
	previously rendered one.
	use React Devtools highlight updates the check re-render.
   Solutions:
	a. overriding shouldComponentUpdate or inherit from React.PureComponent.
		which implementing a shallow comparison of props and state.
	b. keys, stable keys, like data Id.
	c. if you want to pass an arrow function to component prop, to avoid
		create new function every time re-render, and cause children
		re-render, you can define the prop as an instance method.
	d. add Key to an DOM using defaultValue, can avoid re-render/unmount


*/
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  	/* 
  	  use array concat, spread syntax to update array state
  	  use Object assign, spread properties to update object state
  	  then return new array or object to avoid mutation
  	  Or use Immutable.js
  	*/
    const words = this.state.words;
    this.setState({words: [...words, 'marklar']});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default WordAdder