import { FunctionComponent } from 'react';

import '../scss/project.scss';
import Tag, { TagTypes } from './Tag';

export interface ProjectInfo {
	title: string;
	brief: string;
	tags: TagTypes[];
	embed?: FunctionComponent;
}

const Project: FunctionComponent<ProjectInfo> = ({
	title,
	brief,
	tags,
	embed,
}) => {
	console.log(embed);
	return (
		<div className='project'>
			<div className='project__copy'>
				<h3>{title}</h3>
				<p className='project__p'>{brief}</p>
				<ul className='project__tags'>
					{tags.map((tag, key) => (
						<li key={key} className='project__tag'>
							<Tag tag={tag} />
						</li>
					))}
				</ul>
			</div>
			<div className='project__show'>
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
