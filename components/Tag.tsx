import { FunctionComponent } from 'react';

import styles from './Tag.module.scss';

const Tag: FunctionComponent<Props> = ({ tag }) => {
	return (
		<span className={styles.tag + ' ' + styles[getTagTypeClassName(tag)]}>
			{tag}
		</span>
	);
};

function getTagTypeClassName(tag: TagTypes) {
	switch (tag) {
		// red
		// orange
		case 'AWS':
			return 'tag--type-orange';
		// yellow
		case 'WebSocket':
			return 'tag--type-yellow';
		// green
		case 'Node + Express':
		case 'Vue':
		case 'Nuxt':
		case 'MongoDB':
		case 'Shopify':
			return 'tag--type-green';
		// blue
		case 'React Native':
		case 'WordPress':
			return 'tag--type-blue';
		// purple
		case 'Twitch':
		case 'PHP':
			return 'tag--type-purple';
		// pink
		case 'GraphQL':
			return 'tag--type-pink';
		// white
		case 'Expo':
		case 'Braintree':
			return 'tag--type-white';
		default:
			return 'tag--type-default';
	}
}

export default Tag;

export type TagTypes =
	| 'Computer Vision'
	| 'Facecam'
	| 'QR Code'
	| 'Node + Express'
	| 'WebSocket'
	| 'React Native'
	| 'Expo'
	| 'AWS'
	| 'Nuxt'
	| 'Vue'
	| 'Braintree'
	| 'MongoDB'
	| 'GraphQL'
	| 'Twitch'
	| 'WordPress'
	| 'Shopify'
	| 'PHP';

interface Props {
	tag: TagTypes;
}
