import React from "react"
import { Link } from "gatsby"
import { motion } from "motion/react"

const Nav = ({ page = "/", isHome = true, data }) => {

	return (
		<nav className="px-[12px] md:px-[30px] xl:px-[60px] py-[30px] absolute box-border top-0 left-0 right-0" id="nav" style={{zIndex: 500}}>
			<div className="flex">
				<div className="flex-none thinger-dinger">
					<Link
						to={page}
						style={{
							display: "inline-block",
						}}
					>
						<motion.div
							layout
							className="switch relative select-none cursor-pointer bg-white w-[50px] h-[26px] rounded-[26px] px-[2px] py-[2px]"
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
								className="bg-black relative text-[10px] font-medium w-[26px] h-[26px] rounded-[26px] flex justify-center items-center"
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
				<div className="flex-auto">
					<span className="block leading-normal">{data.site.siteMetadata.author}</span>
					<span className="block leading-normal">
						{data.site.siteMetadata.position}
					</span>
				</div>
				<div className="w-32">
					{data.site.siteMetadata.contactMethods.map((g) =>(
						<motion.a initial={{opacity: 1}} transition={{duration: 0.15}} whileHover={{opacity:0.5}} href={g.link} className="block leading-normal">{g.text}</motion.a>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Nav
