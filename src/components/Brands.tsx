import { FunctionComponent } from 'react';

import '../scss/brands.scss';

const Brands: FunctionComponent = () => {
	const brands: BrandInfo[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

	return (
		<div className='brands'>
			<h2 className='brands__h2'>Brands I've worked with</h2>
			<ul className='brands__ul'>
				{brands.map((brand, key) => (
					<li key={key} className='brands__li'>
						<div className='image__wrapper'>
							<img
								className='image'
								src={brand.src}
								alt={brand.alt}
								title={brand.title}
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Brands;

interface BrandInfo {
	src?: string;
	alt?: string;
	title?: string;
}
