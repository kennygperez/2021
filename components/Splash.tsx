import { FunctionComponent, useEffect, useState } from 'react';

import styles from './Splash.module.scss';

const Splash: FunctionComponent = () => {
	const [isVisible, setVisibility] = useState<boolean>(true);

	useEffect(() => {
		// wait a few milliseconds before showing the screen
		setTimeout(setVisibility, 250, false);
	}, []);

	if (isVisible) {
		return <div className={styles.splash} />;
	} else {
		return <div className={styles.splash + ' ' + styles['splash--hide']} />;
	}
};

export default Splash;
