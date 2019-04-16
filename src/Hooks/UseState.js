// Hooks use state and other features without a class
import React, {useState} from 'react';

/*
	react will preserve state between re-renders
	a pair: current state, function to update it.
	
	Array destructuring, give different names to state variables
	order is important.
	
	Hooks: functions, let you hook into react state and lifecycle features
	from function components.
	built-in hooks: useState, useEffect, useReducer, useContext
	create own Hooks: reuse stateful behavior between different components

*/
function Count() {
	const [count, setCount] = useState(0);

}

export default Count;















































