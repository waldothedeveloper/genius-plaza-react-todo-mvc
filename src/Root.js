import React, { Component } from 'react';
import './Root.css';
import TodoForm from './components/NewTodo/TodoForm';
import AppTitle from './components/UI/Title/AppTitle';
import TodoList from './components/UI/NewTodo/TodoList';
import Count from './components/UI/Todos/Count';

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newTodo: '',
			todos: [],
			hasError: null,
			examplesOfTodos: [
				'e.g: go to gym',
				'e.g: go to the beach',
				'e.g: make spaghetti',
				'e.g: hug someone you love',
				'e.g: learn anything new',
				'e.g: eat healthy',
				'e.g: dont worry be happy'
			]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.receiveToggleCheckBox = this.receiveToggleCheckBox.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	deleteTodo(index) {
		const todos = [ ...this.state.todos ];
		todos.splice(index, 1);
		this.setState({
			todos
		});
	}

	receiveToggleCheckBox(index, checked) {
		const todos = [ ...this.state.todos ]; //copy the array
		todos[index] = { ...todos[index], done: checked }; //update done property
		this.setState({
			todos
		});
	}

	handleChange(event) {
		this.setState({ newTodo: event.target.value });
	}

	handleSubmit(event) {
		const lastTodo = this.state.newTodo.trim();
		const todosArray = this.state.todos;
		let newTodosList = '';

		if (todosArray.length >= 1) {
			newTodosList = todosArray.find((t) => t.title === lastTodo);
		}

		// To catch errors on the form submitted, the React docs recommend to use the regular javascript try/catch. For more info please read: https://reactjs.org/docs/error-boundaries.html
		// And go to the section: How About Event Handlers?
		try {
			// Titles longer than 60 characters not allowed
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
				// empty todo title not allowed
				alert('you cannot submit an empty todo');
			}
		} catch (error) {
			this.setState({ hasError: true });
			console.log(error);
		}
		event.preventDefault();
	}

	render() {
		// Using if else in case there's an error in the Form I putting a fallback UI
		if (this.state.hasError) {
			return (
				<div className=".Form">
					<h1>Something went wrong</h1>
				</div>
			);
		} else
			return (
				<React.Fragment>
					<AppTitle />

					<TodoForm
						handleSubmit={this.handleSubmit}
						newTodo={this.state.newTodo}
						handleChange={this.handleChange}
						exTodo={this.state.examplesOfTodos}
					/>
					<Count number={this.state.todos} />
					<TodoList
						todos={this.state.todos}
						toggleTodoDone={this.receiveToggleCheckBox}
						removeTodo={this.deleteTodo}
					/>
				</React.Fragment>
			);
	}
}

export default Root;
