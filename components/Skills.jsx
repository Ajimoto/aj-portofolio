import Image from 'next/image';
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
							<Image
								alt="/"
								src="/../public/assets/skills/html.png"
								width="64"
								height="64"
							/>
						</div>
						<div className="m-auto hover:scale-105">
							<p>CSS</p>
							<Image
								alt="/"
								src="/../public/assets/skills/css.png"
								width="64"
								height="64"
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>JavaScript</p>
							<Image
								alt="/"
								src="/../public/assets/skills/javascript.png"
								width="64"
								height="64"
							/>
						</div>
						<div className="m-auto hover:scale-105">
							<p>TailWindcss</p>
							<Image
								alt="/"
								src="/../public/assets/skills/tailwind.png"
								width="64"
								height="64"
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>React</p>
							<Image
								alt="/"
								src="/../public/assets/skills/react.png"
								width="64"
								height="64"
							/>
						</div>
						<div className="m-auto hover:scale-105">
							<p>Next.js</p>
							<Image
								alt="/"
								src="/../public/assets/skills/nextjs.png"
								width="64"
								height="64"
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>Node.js</p>
							<Image
								alt="/"
								src="/../public/assets/skills/node.png"
								width="64"
								height="64"
							/>
						</div>
						<div className="m-auto hover:scale-105">
							<p>MongoDB</p>
							<Image
								alt="/"
								src="/../public/assets/skills/mongo.png"
								width="64"
								height="64"
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4 justify-center items-center mb-4">
						<div className="m-auto hover:scale-105">
							<p>Github</p>
							<Image
								alt="/"
								src="/../public/assets/skills/github1.png"
								width="64"
								height="64"
							/>
						</div>
						<div className="m-auto hover:scale-105">
							<p>MySQL</p>
							<Image
								alt="/"
								src="/../public/assets/skills/sql.png"
								width="64"
								height="64"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
