import React, { useState } from "react"
import { motion } from "framer-motion"

import Cloud from "../images/cloud.png"

const Project = ({ byline }) => {
	const [openItem, setOpen] = useState(false)

	const varOne = {
		visible: {
			flexBasis: "50%",
			transition: {
				type: "spring",
				bounce: 0,
			},
		},
		hidden: {
			flexBasis: "100%",
			transition: {
				type: "spring",
				bounce: 0,
			},
		},
	}

	const varTwo = {
		visible: {
			flexBasis: "50%",
			transition: {
				type: "spring",
				bounce: 0,
			},
		},
		hidden: {
			flexBasis: "0%",
			transition: {
				type: "spring",
				bounce: 0,
			},
		},
	}

	const copyEffect = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0,
				delay: 0.25,
			},
		},
		hidden: {
			y: "2vw",
			opacity: 0,
			transition: {
				type: "spring",
				bounce: 0,
				y: {
					duration: 0.0001,
					delay: 0.5
				}
			},
		},
	}

	return (
		<section onClick={() => setOpen(!openItem)}>
			<div className="grid grid-cols-12 gap-x-7 px-7">
				<div className="col-span-10">
					<p className="font-['Tiempos_Headline'] font-light text-[140px] leading-[1]">
						{byline}
					</p>
				</div>
			</div>

			<div className="relative px-7">
				
				<div className="w-full flex">
					<motion.div
						layout
						variants={varOne}
						initial="visible"
						animate={openItem ? "visible" : "hidden"}
						className="z-10 relative"
					>
						<img className="rounded-lg mb-7" src={Cloud} />
						<img className="rounded-lg mb-7" src={Cloud} />
						<img className="rounded-lg mb-7" src={Cloud} />
						<img className="rounded-lg mb-7" src={Cloud} />
					</motion.div>
					<motion.div
						layout
						variants={varTwo}
						initial="visible"
						animate={openItem ? "visible" : "hidden"}
						className="relative z-0"
					>
						<div className="grid grid-cols-6 gap-x-7 h-full w-[50vw] absolute top-0 right-0">
							<div className="col-start-2 col-span-4">
								<div className="sticky top-0">
									<motion.div
										variants={copyEffect}
										initial="visible"
										animate={openItem ? "visible" : "hidden"}
									>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer ultrices est pharetra ultrices tempor. Etiam
											eget felis ligula. Integer tristique blandit egestas.
											Phasellus pellentesque nec quam id aliquam.
										</p>

										<p>
											Duis pulvinar ligula eget nulla tincidunt, eget maximus
											velit luctus. Aenean ac euismod tortor. Morbi lacus
											nisl, sollicitudin eget hendrerit sed, volutpat sed
											elit. Vivamus turpis nisl, vulputate ac sem non, posuere
											dapibus orci.
										</p>

										<p>
											Donec nec ante blandit, vestibulum velit non, semper
											metus. Curabitur scelerisque lorem vel feugiat pharetra.
											Integer rhoncus massa a blandit semper. In nunc lacus,
											molestie nec turpis id, suscipit auctor sem.
										</p>

										<p>
											Etiam efficitur laoreet lorem, non vestibulum nulla
											posuere sed. Nam convallis orci urna, nec sodales ex
											fringilla sit amet. Nulla eget nunc facilisis, elementum
											eros quis, suscipit nibh.
										</p>

										<p>
											In hendrerit et diam vitae tincidunt. Nunc a dui mauris.
											Maecenas vestibulum justo eu metus efficitur, vitae
											accumsan ligula imperdiet. Sed a urna lorem. Cras et
											lectus sed lectus rutrum accumsan.
										</p>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
				
			</div>
			<div className="bottom-0 z-20 w-full left-0 fixed">
				THIS IS SOMETHING
			</div>
		</section>
	)
}

export default Project
