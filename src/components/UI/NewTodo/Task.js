import React from 'react';

function Task(props) {
	return (
		<ul>
			{props.newTodo.map((t) => {
				return <li key={t.title}>{t.title}</li>;
			})}
		</ul>
	);
}

export default Task;
