import Image from 'next/image';
import heading from '../public/assets/Heading.png';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('#1f2937');
	const router = useRouter();

	useEffect(() => {
		if (router.asPath === '/AdventureG' || router.asPath === '/Waystone') {
			setNavBg('transparent');
			setLinkColor('#ecf0f3');
		} else {
			setNavBg('#ecf0f3');
			setLinkColor('#1f2937');
		}
	}, [router]);
	const handleNav = () => {
		setNav(!nav);
	};
	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);
	return (
		// Navbar-----------------------------------------------------------------------------
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100]'
					: 'fixed w-full h-20 z-[100]'
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/">
					<Image
						className="cursor-pointer"
						src={heading}
						alt="Aj logo"
						width="125"
						height="125"
					/>
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase hover:scale-105 ease-in duration-300">
								Contact
							</li>
						</Link>
					</ul>
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className="md:hidden"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			{/* -------Nav pop out---------- */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? '  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: ' fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div className="flex w-full items-center justify-between">
						<Image src={heading} width="87" height="65" alt="logo" />
						<div
							onClick={handleNav}
							className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
						>
							<AiOutlineClose />
						</div>
					</div>
					<div className="border-b border-gray-300 my-4">
						<p className="w-[85%] md:w-[90%] py-4">
							Creating projects that bring joy
						</p>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li
									onClick={handleNav}
									className="py-4 text-sm hover:scale-105 ease-in duration-300"
								>
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li
									onClick={handleNav}
									className="py-4 text-sm hover:scale-105 ease-in duration-300"
								>
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li
									onClick={handleNav}
									className="py-4 text-sm hover:scale-105 ease-in duration-300"
								>
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li
									onClick={handleNav}
									className="py-4 text-sm hover:scale-105 ease-in duration-300"
								>
									Projects
								</li>
							</Link>
							<Link href="/#contact">
								<li
									onClick={handleNav}
									className="py-4 text-sm hover:scale-105 ease-in duration-300"
								>
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								lets connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
									<Link href="https://www.linkedin.com/in/austingentz/">
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
			</div>
		</div>
	);
};

export default Navbar;
