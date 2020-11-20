import React, { Component } from 'react';

class InputField extends React.Component {
	render() {
		return (
			<input type="text" name="hello" value="hello world" />
		)
	}
}

ReactDOM.render(
	<InputField />,
	document.getElementById('hello')
);

export default InputField;