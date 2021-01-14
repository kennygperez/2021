import { FunctionComponent } from 'react';

import '../scss/connect.scss';
import githubSVG from '../assets/svg/github.svg';
import linkedinSVG from '../assets/svg/linkedin.svg';

const Connect: FunctionComponent = () => {
	const links: Link[] = [
		{
			title: 'Github',
			href: 'https://github.com/kennygperez',
			src: githubSVG,
			alt: 'Github logo',
		},
		{
			title: 'Linkedin',
			href: 'https://www.linkedin.com/in/kennygperez/',
			src: linkedinSVG,
			alt: 'Linkedin logo',
		},
	];

	return (
		<ul className='connect'>
			{links.map(link => (
				<li key={link.href} className='connect__item'>
					<a href={link.href} title={link.title}>
						<img className='connect__svg' src={link.src} alt={link.alt} />
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
	src: string;
	alt: string;
}
