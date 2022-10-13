import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
	return (
		<div id="contact" className=" w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl tracking-widest uppercase text-red-700">
					contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div>
								<Image
									className="rounded-xl"
									src="/../public/assets/ajiheadshot.jpeg"
									alt="picture of Aj"
									width="500"
									height="650"
								/>
							</div>
							<div>
								<h2 className="py-2">Austin Gentz (AJ)</h2>
								<p>Full-Stack Developer</p>
								<p className="py-4">
									I am available for any part-time or full time positions. I am
									open to remote and on-site locations. Willing to travel and
									relocate just about anywhere.
								</p>
								<p className="uppercase pt-8">Connect with me</p>
								<div className="flex items-center justify-between py-4">
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
					{/* right */}
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<Image
							className="rounded-xl"
							src="/../public/assets/cert.jpeg"
							alt="picture of certificate in Full-stack Web Development"
							width="1200"
							height="1000"
						/>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
