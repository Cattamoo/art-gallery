import React from 'react';
import styles from './picture.module.css';

const Picture: React.FC<{ picture: Image, pos: string }> = ({ picture, pos }) => {
	return (
		<div className={`${styles.item} ${pos}`}>
			<img className={styles.picture} src={picture.url} alt={picture.id} />
			<span className={styles.author}>{picture.author}</span>
		</div>
	);
};

export default Picture;