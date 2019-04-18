import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
	JSX is syntax extension to JavaScript. 
	rendering logic is inherently coupled with other UI logic:
	event handling, state change, data fetching.

	Babel compiles JSX down to

	const element = React.createElement(
		'h1', //tag name/type
		{className: 'greeting'}, //properties object
		'Hello, World' //children
	);

	ReactDOM.render(element, document.getElementById('root'));
*/