import React, { Component } from 'react';
import './Root.css';
import InputForm from './components/NewTodo/InputForm';

class Root extends Component {
	render() {
		return (
			<div className="App">
				<div className="AppTitleContainer">
					<h1 className="AppTitle">Awesome TODO App</h1>
				</div>
				<InputForm />
			</div>
		);
	}
}

export default Root;
