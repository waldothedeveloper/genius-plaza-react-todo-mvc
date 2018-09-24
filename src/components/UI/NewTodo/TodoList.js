import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
class TodoList extends React.Component {
	sendTaskToRemove(index) {
		this.props.removeTodo(index);
	}

	sendToggleCheckbox(index, event) {
		this.props.toggleTodoDone(index, event.target.checked);
	}

	render() {
		return (
			<React.Fragment>
				<ul className="Ul">
					{this.props.todos.map((t, index) => {
						return (
							<div key={index} className="Form-Group-Prepend">
								<div className={t.done ? 'Form-Group-Text-Disabled' : 'Form-Group-Text'}>
									<input
										type="checkbox"
										aria-label="Checkbox to mark the task as done"
										onChange={(e) => this.sendToggleCheckbox(index, e)}
									/>
								</div>
								<li className={t.done ? 'Disabled' : 'Li'} key={t.title}>
									{t.title} &nbsp;
									<span onClick={() => this.sendTaskToRemove(index)} className="Delete-Task">
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
