import { FunctionComponent } from 'react';

import styles from './Art.module.scss';

const Art: FunctionComponent = () => {
	return (
		<div className={styles.art}>
			<div className={styles.art__circle} />
			<div className={styles.art__slab + ' ' + styles['art__slab--0']} />
			<div className={styles.art__slab + ' ' + styles['art__slab--1']} />
			<div className={styles.art__slab + ' ' + styles['art__slab--2']} />
			<div className={styles.art__slab + ' ' + styles['art__slab--3']} />
			<div className={styles.art__slab + ' ' + styles['art__slab--4']} />
			<div className={styles.art__slab + ' ' + styles['art__slab--5']} />
			<div className={styles.art__slab + ' ' + styles['art__slab--6']} />
			<div className={styles.art__slab + ' ' + styles['art__slab--7']} />
			<div className={styles.art__slab + ' ' + styles['art__slab--8']} />
		</div>
	);
};

export default Art;
