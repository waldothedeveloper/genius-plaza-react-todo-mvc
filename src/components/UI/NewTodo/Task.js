import React from 'react';
import './Task.css';

class Task extends React.Component {
	sendTaskToRemove(index) {
		this.props.removeTask(index);
	}

	sendToggleCheckbox(index, event) {
		this.props.checkTodo(index, event.target.checked);
	}

	render() {
		return (
			<ul className="Ul">
				{this.props.newTodo.map((t, index) => {
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
		);
	}
}

export default Task;
