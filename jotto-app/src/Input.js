/* -------------------------------------------------------------------------- */
/* ALL IMPORTS */
/* -------------------------------------------------------------------------- */
// React
import React, { Component } from "react";
import { connect } from "react-redux";

// Packages
// Context
// Components
// Assets
// Constants

// Utils / Methods
import { guessWord } from "./actions";

// Styles

/* -------------------------------------------------------------------------- */
/* START OF CUSTOM INPUT COMPONENT */
/* -------------------------------------------------------------------------- */
class Input extends Component {
	render() {
		const { success } = this.props;

		return (
			<div className="bueller" data-test="component-input">
				{!success && (
					<form action="" className="form-inline">
						<input
							className="mb-2 mx-sm-3"
							data-test="input-box"
							defaultValue=""
							name=""
							onClick={() => {}}
							placeholder="Enter Your Guess"
							type="text"
						/>
						<button
							className="btn btn-primary mb-2"
							data-test="submit-button"
							type="submit"
						>
							Hit Me!
						</button>
					</form>
				)}
			</div>
		);
	}
}

const mapStateToProps = ({ success }) => {
	return {
		success,
	};
};

export default connect(mapStateToProps, { guessWord })(Input);
