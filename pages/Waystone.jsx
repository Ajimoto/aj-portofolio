import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import WaystoneImg from '../public/assets/WaystoneSS.jpg';

const Waystone = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={WaystoneImg}
					alt="adventure game screen shot"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
					<h2 className="py-2 text-white">Waystone</h2>
					<h3 className="text-white">React / Tailwind / MongoDB </h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app is a social media site where you can find friends to play
						games with. The front end is built with React utilizing React-Router
						for page navigation. This is a full stack application that has its
						own database that stores all the information on individual users.
						This includes email, encrypted passwords, profile pictures, user
						posts and user comments. This application has full CRUD capabilities
						and is a RESTful API. On Waystone you can create an account,
						username and profile picture. You can then add friends using the
						random friend finder feature that pairs you with random users in a
						Tinder style matching system. You can send and receive friend
						requests, post messages on a shared message bored, comment on a
						user's post and reply to users comments. All data including post,
						comments and replies are stored in the applications API under the
						user's ID.
					</p>
					<Link href="https://jb-waystone-fornt.herokuapp.com/waystone-front/login">
						<button className="px-8 py-2 mt-4 mr-8 hover:scale-105">
							Demo
						</button>
					</Link>
					<Link href="https://github.com/brownj47/waystone-front">
						<button className="px-8 py-2 mt-4 mr-8 hover:scale-105">
							Code
						</button>
					</Link>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								React
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Javascript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								MongoDB
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Tailwind
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Heroku
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Cloudinary
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								express.js
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								bcrypt
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								jsonwebtoken
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default Waystone;
