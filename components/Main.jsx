import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Creating projects that bring joy
					</p>
					<h1 className="py-4">
						Yo! I'm <span className="text-red-700">AJ</span>
					</h1>
					<h1 className="py-2">A Full-Stack Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						Im a full-stack web developer specializing in building responsive
						web applications. Primarily, I am focusing on front-end web
						development while honing my skills on back-end technologies.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
							<Link href="https://www.linkedin.com/in/austin-gentz-019789237/">
								<FaLinkedinIn />
							</Link>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
							<Link href="https://github.com/Ajimoto">
								<FaGithub />
							</Link>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
							<Link href="mailto:austingentz@icloud.com">
								<AiOutlineMail />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
