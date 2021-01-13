import { FunctionComponent } from 'react';

import Connect from './Connect';
import '../scss/footer.scss';

const Footer: FunctionComponent = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='footer section'>
			<span className='footer__copy'>&copy; {year} Kenny G Perez</span>
			<div className='footer__connect'>
				<Connect />
			</div>
		</footer>
	);
};

export default Footer;
