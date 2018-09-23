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

		// The event handlers don't happen during rendering in React. But I would like to catch any error on the form submitted, the docs recommend to use the regular javascript try/catch. For more info please read: https://reactjs.org/docs/error-boundaries.html
		// And go to the section: How About Event Handlers?
		try {
			// Titles longer than 50 characters not allowed
			if (lastTodo.length > 50) {
				alert('Please enter a title no greater than 50 characters');
			} else if (
				(lastTodo !== '' && todosArray.length === 0) ||
				(lastTodo !== '' && newTodosList === undefined)
			) {
				// empty titles not allowed
				// if newTodosList return undefined from line 27 above means that the title was not previously entered, therefore we can add it as a new todo task
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
				// same todo title not allowed
				alert('you cannot submit the same todo title, please enter a different title');
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
		// In case there's an error in the Form I putting a fallback UI
		if (this.state.hasError) {
			return (
				<div className=".Form">
					<h1>Something went wrong</h1>
				</div>
			);
		} else
			return (
				<React.StrictMode>
					<div className="Form">
						<form onSubmit={this.handleSubmit}>
							<label className="FormLabel">Enter a new Task</label>
							<input
								className="FormInput"
								type="text"
								value={this.state.newTodo}
								placeholder="ex: go to the gym"
								onChange={this.handleChange}
							/>
							<input className="FormButton" type="submit" value="Submit" />
						</form>
					</div>
					<div className="TodoContainer">
						<Task newTodo={this.state.todos} />
					</div>
				</React.StrictMode>
			);
	}
}

export default Form;
