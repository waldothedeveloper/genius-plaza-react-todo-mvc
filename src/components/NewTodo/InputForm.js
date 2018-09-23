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
		const lastTodo = this.state.newTodo;
		const todosArray = this.state.todos;
		let newTodosList = '';

		if (todosArray.length >= 1) {
			newTodosList = todosArray.find((t) => t.title === lastTodo);
		}

		try {
			if (lastTodo.length > 26) {
				alert('Please enter a title no greater than 26 characters');
			} else if (
				(lastTodo !== '' && todosArray.length === 0) ||
				(lastTodo !== '' && newTodosList === undefined)
			) {
				this.setState({
					todos: [
						...todosArray,
						{
							title: lastTodo,
							done: false
						}
					]
				});
			} else if (lastTodo !== '' && todosArray.length >= 1 && lastTodo === newTodosList.title) {
				alert('you cannot submit the same todo title, please enter a different title :)');
			} else {
				alert('you cannot submit an empty todo');
			}
		} catch (error) {
			this.setState({ hasError: true });
			console.log(error);
		}
		event.preventDefault();
	}

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<h1>Something went wrong :(</h1>
				</div>
			);
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
