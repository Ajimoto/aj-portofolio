import Image from 'next/image';
import React from 'react';

const Navbar = () => {
	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image
					src="/../public/assets/Heading.png"
					alt="Aj logo"
					width="125"
					height="125"
				/>
			</div>
		</div>
	);
};

export default Navbar;
