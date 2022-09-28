import React from 'react';
import styles from './button.module.css';

const Button: React.FC<{ title: string, onClickEvent: Function }> = ({ title, onClickEvent }) => {
	const onClickHandler = () => {
		onClickEvent();
	}
	return (
		<a className={styles.btn} onClick={onClickHandler}>
			{title}
		</a>
	);
};

export default Button;