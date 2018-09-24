import React from 'react';
import Task from '../UI/NewTodo/Task';
import './InputForm.css';
import { result } from '../../utils/Examples';

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
		this.receiveToggleCheckBox = this.receiveToggleCheckBox.bind(this);
	}

	componentDidMount() {
		this.formInput.focus();
	}

	receiveToggleCheckBox(index, checkbox) {
		const todos = [ ...this.state.todos ]; //copy the array
		todos[index] = { ...todos[index] }; //copy the todo
		todos[index].done = checkbox; //update done property on copied todo
		this.setState({
			todos
		});
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

		// To catch any error on the form submitted, the React docs recommend to use the regular javascript try/catch. For more info please read: https://reactjs.org/docs/error-boundaries.html
		// And go to the section: How About Event Handlers?
		try {
			// Titles longer than 50 characters not allowed
			if (lastTodo.length > 60) {
				alert('Please enter a title no greater than 60 characters');
			} else if (
				(lastTodo !== '' && todosArray.length === 0) ||
				(lastTodo !== '' && newTodosList === undefined)
			) {
				// empty titles not allowed
				// if newTodosList return undefined from line 27 above means that the title was not previously entered, therefore we can add it as a new todo task
				this.setState({
					newTodo: '',
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
								ref={(input) => (this.formInput = input)}
								className="FormInput"
								type="text"
								value={this.state.newTodo}
								placeholder={result}
								onChange={this.handleChange}
							/>
							<input className="FormButton" type="submit" value="Submit" />
						</form>
					</div>
					<div className="TodoContainer">
						<Task checkTodo={this.receiveToggleCheckBox} newTodo={this.state.todos} />
					</div>
				</React.StrictMode>
			);
	}
}

export default Form;
