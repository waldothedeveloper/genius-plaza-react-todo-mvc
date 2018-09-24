import React from 'react';
import Pluralize from 'react-pluralize';
import './Count.css';

const Count = (props) => {
	const items = props.number.length;
	return <Pluralize className="Count" singular="item" plural="items" count={items} />;
};

export default Count;
