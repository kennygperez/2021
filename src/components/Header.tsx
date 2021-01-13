import { FunctionComponent } from 'react';

import '../scss/header.scss';
import Connect from './Connect';

const Header: FunctionComponent = () => {
	return (
		<header className='header section'>
			<div className='header__text'>
				<h1 className='header__h1'>
					<span className='header__span header__span--1 header__primary'>
						Kenny G Perez
					</span>
					&nbsp;
					<span className='header__span header__span--2 header__secondary'>
						is a
					</span>
					&nbsp;
					<span className='header__span header__span--3 header__primary'>
						Software Engineer
					</span>
					&nbsp;
					<span className='header__span header__span--4 header__secondary'>
						based in Orlando, Florida.
					</span>
				</h1>
				<div className='header__connect'>
					<Connect />
				</div>
			</div>
		</header>
	);
};

export default Header;
