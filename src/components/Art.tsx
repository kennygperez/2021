import { FunctionComponent } from 'react';

import '../scss/art.scss';

const Art: FunctionComponent = () => {
	return (
		<div className='art'>
			<div className='art__circle' />
			<div className='art__slab art__slab--0' />
			<div className='art__slab art__slab--1' />
			<div className='art__slab art__slab--2' />
			<div className='art__slab art__slab--3' />
			<div className='art__slab art__slab--4' />
			<div className='art__slab art__slab--5' />
			<div className='art__slab art__slab--6' />
			<div className='art__slab art__slab--7' />
			<div className='art__slab art__slab--8' />
		</div>
	);
};

export default Art;
