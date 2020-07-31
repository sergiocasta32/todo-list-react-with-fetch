import React from "react";
import PropTypes from "prop-types";

const List = ({ lista, onDeleteClicked, counter }) => {
	const todoList = lista.map((elemento, index) => {
		if (elemento.done === true) {
			return (
				<li className="todos" key={index}>
					{elemento.label}
					<i className="delLi fa fa-times" onClick={() => onDeleteClicked(index)} />
				</li>
			);
		}
	});
	return (
		<ul>
			{todoList}
			{counter}
		</ul>
	);
};

export default List;

List.propTypes = {
	lista: PropTypes.any,
	onDeleteClicked: PropTypes.any,
	counter: PropTypes.any
};
