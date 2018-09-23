import React from 'react';
import './Task.css';

const Task = (props) => {
	return (
		<ul className="Ul">
			{props.newTodo.map((t) => {
				return (
					<li className="Li" key={t.title}>
						{t.title}
					</li>
				);
			})}
		</ul>
	);
};

export default Task;
