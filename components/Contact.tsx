import { FunctionComponent } from 'react';

import styles from './Contact.module.scss';

const Contact: FunctionComponent = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.contact__half}>
				<h2>Get in touch</h2>
				<p>Like what you see? Get in touch via email!</p>
			</div>
			<div className={styles.contact__half}>
				<a
					className={styles.contact__talk}
					href='mailto:hi@kennygperez.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					Let's talk
				</a>
			</div>
		</div>
	);
};

export default Contact;
