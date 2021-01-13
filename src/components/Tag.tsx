import { FunctionComponent } from 'react';

import '../scss/tag.scss';

export type TagTypes =
	| 'Computer Vision'
	| 'Facecam'
	| 'QR Code'
	| 'Node+Express'
	| 'WebSocket'
	| 'React Native'
	| 'Expo'
	| 'AWS'
	| 'Vue'
	| 'Braintree'
	| 'MongoDB';

interface Props {
	tag: TagTypes;
}

const Tag: FunctionComponent<Props> = ({ tag }) => {
	return <span className={`tag ${getTagTypeClassName(tag)}`}>{tag}</span>;
};

function getTagTypeClassName(tag: TagTypes) {
	switch (tag) {
		case 'Node+Express':
			return 'tag--type-node-express';
		case 'MongoDB':
			return 'tag--type-mongodb';
		case 'Vue':
			return 'tag--type-vue';
		case 'WebSocket':
			return 'tag--type-websocket';
		case 'React Native':
			return 'tag--type-react-native';
		case 'Expo':
			return 'tag--type-expo';
		case 'AWS':
			return 'tag--type-aws';
		case 'Braintree':
			return 'tag--type-braintree';
		default:
			return 'tag--type-default';
	}
}

export default Tag;
