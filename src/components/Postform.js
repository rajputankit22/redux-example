import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../store/actions/postActions";

export class Postform extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			body: ""
		};
	}
	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body
		};

		this.props.createPost(post);
		// Call Action
	};

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title:</label>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>
					<br />
					<div>
						<label>Body:</label>
						<textarea
							name="body"
							value={this.state.body}
							onChange={this.onChange}
						/>
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

Postform.propTypes = {
	createPost: PropTypes.func.isRequired,
	newpost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	newpost: state.postss.item
});

export default connect(
	mapStateToProps,
	{ createPost }
)(Postform);
