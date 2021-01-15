import { FunctionComponent } from 'react';

import styles from './Header.module.scss';
import Connect from './Connect';

const Header: FunctionComponent = () => {
	return (
		<header className={styles.header + ' section'}>
			<div className={styles.header__text}>
				<h1 className={styles.header__h1}>
					<span className={styles.header__span + ' ' + styles.header__primary}>
						Kenny G Perez&nbsp;
					</span>
					<span>is a</span>
					<span className={styles.header__span + ' ' + styles.header__primary}>
						&nbsp;Software Engineer&nbsp;
					</span>
					<span>based in Orlando, Florida.</span>
				</h1>
				<div className={styles.header__connect}>
					<Connect />
				</div>
			</div>
		</header>
	);
};

export default Header;
