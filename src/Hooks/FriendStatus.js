import React, {useState, useEffect} from 'react';
import useFriendStatus from './useFriendStatus';

function FriendStatus(props) {
 	const [isOnline, setIsOnline] = useState(null);

 	function handleStatusChange(status) {
 		setIsOnline(status.isOnline);
 	}

 	useEffect(() => {
 		ChatApi.subscribeToFriendStatus(props.friend.id, handleStatusChange);
 		return () => {
 			ChatApi.unSubscribeFriendStatus(props.friend.id, handleStatusChange);
 		}
 	});

 	if (isOnline === null)
 		return 'Loading';
 	return isOnline ? 'Online' : 'Offline';
}

/*
 we can use custom hooks for more components.
 Traditionally, we use popualar solutions like higher-order components,
 render-props. Custom hooks can do this 
 without adding more components to your tree.
*/
function FriendStatusWithCustomHook(props) {
	const isOnline = useFriendStatus(props.friend.id);

	if (isOnline === null)
 		return 'Loading';
 	return isOnline ? 'Online' : 'Offline';
}

/* 
	Rules:
	1. call hooks at the top level, not inside loops, 
		conditions, nested functions.
		So hooks are called in the same order each time, and
		allow React to correctly preserve the state of Hooks between
		multiple calls.
	2. call hooks from react function components or custom hooks, 
		not regular functions.
	3. 
*/