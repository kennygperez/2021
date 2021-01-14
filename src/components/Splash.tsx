import { FunctionComponent, useEffect, useState } from 'react';

import '../scss/splash.scss';

const Splash: FunctionComponent = () => {
	const [isVisible, setVisibility] = useState<boolean>(true);

	useEffect(() => {
		// wait a few milliseconds before showing the screen
		setTimeout(setVisibility, 250, false);
	}, []);

	if (isVisible) {
		return <div className='splash' />;
	} else {
		return <div className='splash splash--hide' />;
	}
};

export default Splash;
