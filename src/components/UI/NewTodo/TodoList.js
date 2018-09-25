import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.sendToggleCheckbox = this.sendToggleCheckbox.bind(this);
	}

	sendTaskToRemove(id) {
		this.props.removeTodo(id);
	}

	sendToggleCheckbox = (index) => (event) => {
		return this.props.toggleTodoDone(index, event);
	};

	render() {
		return (
			<React.Fragment>
				<ul className="Ul">
					{this.props.todos.map((t, index) => {
						return (
							<div key={t.id} className="Form-Group-Prepend">
								<div className={t.done ? 'Form-Group-Text-Disabled' : 'Form-Group-Text'}>
									<input
										type="checkbox"
										aria-label="Checkbox to mark the task as done"
										onChange={this.sendToggleCheckbox(index)}
									/>
								</div>
								<li className={t.done ? 'Disabled' : 'Li'} key={t.id}>
									{t.title} &nbsp;
									<span onClick={() => this.sendTaskToRemove(t.id)} className="Delete-Task">
										X
									</span>
								</li>
							</div>
						);
					})}
				</ul>
			</React.Fragment>
		);
	}
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleTodoDone: PropTypes.func.isRequired,
	removeTodo: PropTypes.func.isRequired
};

export default TodoList;
