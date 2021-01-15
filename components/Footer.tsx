import { FunctionComponent } from 'react';

import styles from './Footer.module.scss';
import Connect from './Connect';

const Footer: FunctionComponent = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer + ' section'}>
			<span className={styles.footer__copy}>&copy; {year} Kenny G Perez</span>
			<div className={styles.footer__connect}>
				<Connect />
			</div>
		</footer>
	);
};

export default Footer;
