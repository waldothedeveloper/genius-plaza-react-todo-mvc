import React from 'react';
import './Task.css';

const Task = (props) => {
	return (
		<ul className="Ul">
			{props.newTodo.map((t) => {
				return (
					<div className="Form-Group-Prepend">
						<div className="Form-Group-Text">
							<input type="checkbox" aria-label="Checkbox for following text input" />
						</div>
						<li className="Li" key={t.title}>
							{t.title}
						</li>
					</div>
				);
			})}
		</ul>
	);
};

export default Task;
