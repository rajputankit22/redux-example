import { FETCH_POST, NEW_POST } from "./types";

// Function for Common JS
// export function fetchPosts() {
// 	return function(dispatch) {
// 		fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
// 			.then(res => res.json())
// 			.then(posts => {
// 				dispatch({
// 					type: FETCH_POST,
// 					payload: posts
// 				});
// 			});
// 	};
// }

// Function for ES6
export const fetchPosts = () => dispatch => {
	fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
		.then(res => res.json())
		.then(posts => {
			dispatch({
				type: FETCH_POST,
				payload: posts
			});
		});
};

export const createPost = postData => dispatch => {
	console.log("Action Called");
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(postData)
	})
		.then(res => res.json())
		.then(post => {
			dispatch({
				type: NEW_POST,
				payload: post
			});
		});
};
