import React, {useState, useEffect} from 'react';

function useFriendStatus(friendId) {
 	const [isOnline, setIsOnline] = useState(null);

 	function handleStatusChange(status) {
 		setIsOnline(status.isOnline);
 	}

 	useEffect(() => {
 		ChatApi.subscribeToFriendStatus(friendId, handleStatusChange);
 		return () => {
 			ChatApi.unSubscribeFriendStatus(friendId, handleStatusChange);
 		}
 	});

 	return isOnline;
}

export default useFriendStatus;

/* 
	
*/