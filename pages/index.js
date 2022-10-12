import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar.jsx';
import Main from '../components/Main.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Austin Gentz | Front-End Developer</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
