import React, { useState } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const Nav = ({ page = "/", isHome = true }) => {
	const toAboutTrans = {
		initial: {
			justifyContent: "start",
		},
		trans: {
			justifyContent: "end",
		},
	}

	const toHomeTrans = {
		initial: {
			justifyContent: "end",
		},
		trans: {
			justifyContent: "start",
		},
	}

	return (
		<nav className="mx-[30px] absolute top-0 left-0 right-0" style={{zIndex: 500}}>
			<div className="grid grid-cols-12">
				<div className="col-span-2">
					<Link
						to={page}
						style={{
							display: "inline-block",
							paddingTop: "30px",
							paddingBottom: "30px",
						}}
					>
						<motion.div
							layout
							className="switch relative select-none cursor-pointer bg-white w-[56px] h-[30px] rounded-[30px] px-[2px] py-[2px]"
						>
							<motion.div
								layout
								initial={{ left: isHome ? 0 : 26 }}
								exit={{
									left: isHome ? 26 : 0,
									transition: {
										type: "spring",
										bounce: 0,
										duration: 0.25,
									},
								}}
								className="bg-black relative font-['m'] text-sm font-bold w-[30px] h-[30px] rounded-[30px] flex justify-center items-center"
							>
								<div className="overflow-hidden h-[20px]">
									<motion.div
										className="relative"
										initial={{ top: 0 }}
										exit={{
											top: -20,
											transition: {
												type: "spring",
												bounce: 0,
												duration: 0.5,
											},
										}}
									>
										<div>{isHome ? "AM" : "PM"}</div>
										<div>{isHome ? "PM" : "AM"}</div>
									</motion.div>
								</div>
							</motion.div>
						</motion.div>
					</Link>
				</div>
				<div className="col-span-2 py-[30px]">
					<span className="block text-lg leading-normal">Dan Nanasi</span>
					<span className="block opacity-50 text-lg leading-normal">
						Product Designer at Microsoft
					</span>
				</div>
				<div className="col-span-7"></div>
				<div className="col-span-1 text-lg py-[30px]">
					<span className="block text-lg leading-normal">linkedin/daninko</span>
					<span className="block text-lg leading-normal">hi@dannanasi.ca</span>
				</div>
			</div>
		</nav>
	)
}

export default Nav
