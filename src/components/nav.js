import React, { useState } from "react"
import { motion } from "framer-motion"

const Nav = () => {
	const [isOn, setIsOn] = useState(false)
	const toggleSwitch = () => setIsOn(!isOn)

	return (
		<nav className="my-[30px] mx-[30px]">
			<div className="grid grid-cols-12">
				<div className="col-span-2">
					<motion.div
						layout
						className="switch select-none cursor-pointer bg-white w-[56px] h-[30px] rounded-[30px] flex justify-start px-[2px] py-[2px]"
						data-isOn={isOn}
						onClick={toggleSwitch}
					>
						<motion.div
							layout
							className="bg-black font-['m'] text-sm font-bold w-[30px] h-[30px] rounded-[30px] flex justify-center items-center"
						>
							{!isOn && <span>AM</span>}
							{isOn && <span>PM</span>}
						</motion.div>
					</motion.div>
				</div>
				<div className="col-span-2">
					<span className="block text-lg leading-normal">Dan Nanasi</span>
					<span className="block opacity-50 text-lg leading-normal">
						Product Designer at Microsoft
					</span>
				</div>
				<div className="col-span-7"></div>
				<div className="col-span-1 text-lg">
					<span className="block text-lg leading-normal">linkedin/daninko</span>
					<span className="block text-lg leading-normal">hi@dannanasi.ca</span>
				</div>
			</div>
		</nav>
	)
}

export default Nav
