import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdventureGameImg from '../public/assets/AdventureGameSS.jpg';
import ProjItem from './ProjItem';
import WaystoneImg from '../public/assets/WaystoneSS.jpg';

const Projects = () => {
	return (
		<div>
			<div id="projects">
				<p className="text-xl tracking-widest uppercase text-red-700">
					Projects
				</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjItem
						title="Adventure Game"
						backgroundImg={AdventureGameImg}
						projectUrl="/AdventureG"
					/>
					<ProjItem
						title="Mordekainen's Waystone"
						backgroundImg={WaystoneImg}
						projectUrl="/Waystone"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
