import React from 'react';
import Picture from "../picture/picture";
import styles from './gallery.module.css';

const Gallery: React.FC<{ pictures: Image[], template: string }> = ({ pictures, template }) => {

	const templateStyle: React.CSSProperties = {
		gridTemplateAreas: template
	};

	return (
		<div className={styles.container} style={templateStyle}>
			{
				pictures.map((picture, idx) => {
					return <Picture picture={picture} pos={styles[`item${idx+1}`]} />
				})
			}
		</div>
	);
};

export default Gallery;