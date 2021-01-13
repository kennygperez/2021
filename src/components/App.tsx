import { FunctionComponent } from 'react';

import '../scss/index.scss';
import Header from './Header';
import Art from './Art';
import Project, { ProjectInfo } from './Project';
import Brands from './Brands';
import Footer from './Footer';

const App: FunctionComponent = () => {
	const projects: ProjectInfo[] = [
		{
			title: 'Lachlan Computer Vision Facecam',
			brief:
				"Lachlan is one of the largest Fornite streamers with over 14.5 million subscribers on YouTube. I lead the development in creating a streaming facecam that would react according to Lachlan's in-game health and shield. This required me to develop a proprietary computer vision software to analyze his gameplay in real-time. Using a WebSocket connection the stats would be sent to an OBS browser source.",
			tags: ['Computer Vision', 'Facecam', 'Node+Express', 'WebSocket'],
			embed: () => (
				<iframe
					title='lachlan'
					className='image'
					src='https://www.youtube.com/embed/SUqYsXdPnpY'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			),
		},
		{
			title: 'UCF Here',
			brief:
				'QRCode based attendance application utilizing a native mobile app and LTI enabled Python/Django web application. I lead the development of the mobile application. Refactored student design project code to make it production-ready and optimized the code to use the best practices. UCFHere utilized React Native and Expo SDK.',
			tags: ['React Native', 'Expo', 'QR Code'],
		},
		{
			title: 'Client Portal',
			brief:
				'I developed a preparatory CRM software to allow VBI to manage their custom design projects, client relationships, and handle payments. I was the lead programmer on this managing a small team. We utilized Node+Express and MongoDB on the backend. VueJS on the frontend.',
			tags: ['Node+Express', 'MongoDB', 'AWS', 'Vue', 'Braintree'],
		},
	];

	return (
		<>
			<Header />

			<Art />

			<section className='section section--mb'>
				{projects.map((project, key) => (
					<Project
						key={key}
						title={project.title}
						brief={project.brief}
						tags={project.tags}
						embed={project.embed}
					/>
				))}
			</section>

			<section className='section section--mb'>
				<Brands />
			</section>

			<Footer />
		</>
	);
};

export default App;
