import React, { Component } from 'react';
import './Root.css';
import InputForm from './components/NewTodo/InputForm';
import AppTitle from './components/UI/Title/AppTitle';

class Root extends Component {
	render() {
		return (
			<React.Fragment>
				<AppTitle />
				<InputForm />
			</React.Fragment>
		);
	}
}

export default Root;
