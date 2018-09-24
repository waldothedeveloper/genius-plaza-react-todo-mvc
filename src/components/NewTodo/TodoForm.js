import React from 'react';
import './TodoForm.css';
import { randomExample } from '../../utils/Examples';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.formInput.focus();
	}

	handleChange() {
		this.props.handleChange();
	}

	render() {
		return (
			<React.Fragment>
				<div className="Form">
					<form onSubmit={this.props.handleSubmit}>
						<label className="FormLabel">Enter a new Task</label>
						<input
							ref={(input) => (this.formInput = input)}
							className="FormInput"
							type="text"
							value={this.props.newTodo}
							placeholder={this.props.exTodo[randomExample(this.props.exTodo.length)]}
							onChange={this.props.handleChange}
						/>
						<input className="FormButton" type="submit" value="Submit" />
					</form>
				</div>
				<div className="TodoContainer">
					{/* <Task removeTask={this.deleteTodo} checkTodo={this.receiveToggleCheckBox} newTodo={this.state.todos} /> */}
				</div>
			</React.Fragment>
		);
	}
}

export default TodoForm;
