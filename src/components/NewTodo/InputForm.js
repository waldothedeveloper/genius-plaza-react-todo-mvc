import React from 'react';
import Task from '../UI/NewTodo/Task';
import './InputForm.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTodo: '',
			todos: [],
			hasError: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ newTodo: event.target.value });
	}
	handleSubmit(event) {
		try {
			if (
				(this.state.newTodo !== '' && this.state.todos.length === 0) ||
				(this.state.newTodo !== '' &&
					this.state.todos.length >= 1 &&
					this.state.newTodo !== this.state.todos[this.state.todos.length - 1].title)
			) {
				this.setState({
					todos: [
						...this.state.todos,
						{
							title: this.state.newTodo,
							done: false
						}
					]
				});
			} else if (
				this.state.newTodo !== '' &&
				this.state.todos.length >= 1 &&
				this.state.newTodo === this.state.todos[this.state.todos.length - 1].title
			) {
				alert('you cannot submit the same todo title, please enter a different title :)');
			} else {
				alert('you cannot submit an empty todo');
			}
		} catch (error) {
			this.setState({ hasError: true });
		}
		event.preventDefault();
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong :(</h1>;
		} else
			return (
				<React.StrictMode>
					<div className="Form">
						<form onSubmit={this.handleSubmit}>
							<input
								className="FormInput"
								type="text"
								value={this.state.newTodo}
								placeholder="enter task"
								onChange={this.handleChange}
							/>
							<input className="FormButton" type="submit" value="Submit" />
						</form>
					</div>
					<div>
						<Task newTodo={this.state.todos} />
					</div>
				</React.StrictMode>
			);
	}
}

export default Form;
