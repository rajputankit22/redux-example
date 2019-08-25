import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/postActions";
import PropTypes from "prop-types";

export class Posts extends Component {
	UNSAFE_componentWillMount() {
		this.props.fetchPosts();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) {
			this.props.postsa.unshift(nextProps.newPost);
		}
	}

	render() {
		const postItem = this.props.postsa.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItem}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	postsa: PropTypes.array.isRequired,
	newPost: PropTypes.object
};

const mapStateToProps = state => ({
	postsa: state.postss.items,
	newPost: state.postss.item
});

export default connect(
	mapStateToProps,
	{ fetchPosts }
)(Posts);
