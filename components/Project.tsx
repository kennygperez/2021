import { FunctionComponent } from 'react';

import styles from './Project.module.scss';
import Tag, { TagTypes } from './Tag';

const Project: FunctionComponent<ProjectInfo> = ({
	title,
	brief,
	tags,
	embed,
}) => {
	return (
		<div className={styles.project}>
			<div className={styles.project__copy}>
				<h3>{title}</h3>
				<p className={styles.project__p}>{brief}</p>
				<ul className={styles.project__tags}>
					{tags.map((tag, key) => (
						<li key={key} className={styles.project__tag}>
							<Tag tag={tag} />
						</li>
					))}
				</ul>
			</div>
			<div className={styles.project__show}>
				<div className='image__wrapper'>
					{embed === undefined ? (
						<img className='image' src='' alt='' />
					) : (
						embed({})
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;

export interface ProjectInfo {
	title: string;
	brief: string;
	tags: TagTypes[];
	embed?: FunctionComponent;
}
