import React from 'react';
import Image from 'next/image';
import ajiHat from '../public/assets/ajihat.jpeg';

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-red-700">
						About
					</p>
					<h2>Who is AJ?</h2>
					<p className="text-gray-600 py-2">I love to learn the latest tech</p>
					<p className="text-gray-600 py-2">
						I have been an automotive and diesel mechanic for the last 10 years.
						I have always been an avid gamer and loved technology and learning
						about complex systems. As a Technician in the automotive industry I
						always took on the role of diagnosing and troubleshooting the
						hardest problems. In my spare time I would dedicate myself to
						learning the latest engine control systems which lead me to being a
						leader in electrical diagnostics and communication systems in my
						field of work.
					</p>
					<p className="text-gray-600 py-2">
						I started my passion for coding by hosting game servers and creating
						Shopify websites. This sparked a flame in my heart and filled me
						with a desire to learn coding. I attended a Full-Stack Coding
						Bootcamp at University of Washington. I learned HTML/CSS, Javascript
						and many frameworks & libraries for both front and back end
						development. I am currently learning Python and studying data
						structures and algorithms to become the most efficient and effective
						developer I can be. I hope one day I can be a contributing member of
						a team that creates and develops impactful applications for the
						world.
					</p>
					<p className="py-2 text-blue-700 underline cursor-pointer">
						Here are some of my Projects
					</p>
				</div>
				<div className="flex items-center justify-center">
					<Image
						src={ajiHat}
						alt="goofy picture of AJ"
						width="150"
						height="200"
						className="rounded-full w-full h-auto m-auto hover:scale-105 ease-in duration-300"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
