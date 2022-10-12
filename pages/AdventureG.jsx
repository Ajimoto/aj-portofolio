import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import AdventureGameImg from '../public/assets/AdventureGameSS.jpg';

const AdventureG = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={AdventureGameImg}
					alt="adventure game screen shot"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
					<h2 className="py-2 text-white">Adventure Game</h2>
					<h3 className="text-white">Materialize / Javascript / JQuery</h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app is an RPG adventure game built in Javascript. User can
						create a character, pick a class and give him/her a unique bio and
						race. Once the player is ready they can start the game where they
						are prompted with story dialog and an option to battle. Fights take
						place in a modal an use a turn based combat system that takes both
						the enemy's and the player's stats into account for hitpoints,
						damage, armor class and attack power. Enemies are randomly fetched
						from the DnD version 5 API with the associated stats. Characters
						increase their with an experience based leveling system. Each level
						increases their health, armor class, attack rating and hit hit
						rating. There is a rest feature allowing the player to camp and
						recover health and spell slots after each encounter. Classes have
						unique starting stats and the Rouge and Wizard have unique
						spells/abilities.
					</p>
					<Link href="https://knight19jonathan.github.io/Adventure-Game-Project-/">
						<button className="px-8 py-2 mt-4 mr-8 hover:scale-105">
							Demo
						</button>
					</Link>
					<Link href="https://github.com/knight19jonathan/Adventure-Game-Project-">
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
								Materialize
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Javascript
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JQuery
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								DnD v5 API
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								The-One-API
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Github Pages
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Google Fonts
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

export default AdventureG;
