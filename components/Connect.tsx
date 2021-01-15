import { FunctionComponent } from 'react';

import styles from './Connect.module.scss';

const Connect: FunctionComponent = () => {
	const links: Link[] = [
		{
			title: 'Github',
			href: 'https://github.com/kennygperez',
			src: '/svg/github.svg',
			alt: 'Github logo',
		},
		{
			title: 'Linkedin',
			href: 'https://www.linkedin.com/in/kennygperez/',
			src: '/svg/linkedin.svg',
			alt: 'Linkedin logo',
		},
	];

	return (
		<ul className={styles.connect}>
			{links.map(link => (
				<li key={link.href} className={styles.connect__item}>
					<a href={link.href} title={link.title}>
						<img
							className={styles.connect__svg}
							src={link.src}
							alt={link.alt}
						/>
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
