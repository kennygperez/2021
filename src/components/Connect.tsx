import { FunctionComponent } from 'react';

import '../scss/connect.scss';

const Connect: FunctionComponent = () => {
	const links: Link[] = [
		{
			title: 'Github',
			href: 'https://github.com/kennygperez',
		},
		{
			title: 'Linkedin',
			href: 'https://www.linkedin.com/in/kennygperez/',
		},
	];

	return (
		<ul className='connect'>
			{links.map(link => (
				<li key={link.href} className='connect__item'>
					<a href={link.href} title={link.title}>
						I
					</a>
				</li>
			))}
		</ul>
	);
};

export default Connect;

interface Link {
	href: string;
	title: string;
	icon?: string;
}
