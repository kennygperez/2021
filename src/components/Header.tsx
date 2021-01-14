import { FunctionComponent } from 'react';

import '../scss/header.scss';
import Connect from './Connect';

const Header: FunctionComponent = () => {
	return (
		<header className='header section'>
			<div className='header__text'>
				<h1 className='header__h1'>
					<span className='header__span header__primary'>
					Kenny G Perez&nbsp;
					</span>
						<span>is a</span>
					<span className='header__span header__primary'>
					&nbsp;Software Engineer&nbsp;
					</span>
					<span>based in Orlando, Florida.</span>
				</h1>
				<div className='header__connect'>
					<Connect />
				</div>
			</div>
		</header>
	);
};

export default Header;
