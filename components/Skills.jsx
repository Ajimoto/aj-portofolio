import Image from 'next/image';
import cssImg from '../public/assets/skills/css.png';
import gitImg from '../public/assets/skills/github1.png';
import htmlImg from '../public/assets/skills/html.png';
import jsImg from '../public/assets/skills/javascript.png';
import mongoImg from '../public/assets/skills/mongo.png';
import nextImg from '../public/assets/skills/nextjs.png';
import nodeImg from '../public/assets/skills/node.png';
import reactImg from '../public/assets/skills/react.png';
import sqlImg from '../public/assets/skills/sql.png';
import tailImg from '../public/assets/skills/tailwind.png';
import React from 'react';

function Skills() {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-red-700">Skills</p>
				<h2 className="py-4">What I can do</h2>

				<div className="p-6 m-2 shadow-xl rounded-xl hover-scale-105 ease-in duration-300">
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>HTML</p>
							<Image alt="html logo" src={htmlImg} width="64" height="64" />
						</div>
						<div className="m-auto hover:scale-105">
							<p>CSS</p>
							<Image alt="css logo" src={cssImg} width="64" height="64" />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>JavaScript</p>
							<Image alt="javascript logo" src={jsImg} width="64" height="64" />
						</div>
						<div className="m-auto hover:scale-105">
							<p>TailWindcss</p>
							<Image alt="tailwind logo" src={tailImg} width="64" height="64" />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>React</p>
							<Image alt="react logo" src={reactImg} width="64" height="64" />
						</div>
						<div className="m-auto hover:scale-105">
							<p>Next.js</p>
							<Image alt="next.js logo" src={nextImg} width="64" height="64" />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>Node.js</p>
							<Image alt="node.js logo" src={nodeImg} width="64" height="64" />
						</div>
						<div className="m-auto hover:scale-105">
							<p>MongoDB</p>
							<Image alt="mongoDB logo" src={mongoImg} width="64" height="64" />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>Github</p>
							<Image alt="github logo" src={gitImg} width="64" height="64" />
						</div>
						<div className="m-auto hover:scale-105">
							<p>MySQL</p>
							<Image alt="MySQL logo" src={sqlImg} width="64" height="64" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
