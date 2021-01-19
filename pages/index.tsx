import Head from 'next/head';
import App from '../components/App';
import Splash from '../components/Splash';

const index = () => {
	const seo = {
		title: 'Kenny G Perez',
		url: 'https://www.kennygperez.com/',
		description: 'Kenny G Perez software engineer based in Orlando',
	};

	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta property='og:type' content='website' key='type' />
				<meta property='og:title' content={seo.title} key='title' />
				<meta property='og:url' content={seo.url} key='url' />
				<meta
					property='og:description'
					content={seo.description}
					key='description'
				/>
			</Head>
			<Splash />
			<App />
		</>
	);
};

export default index;
