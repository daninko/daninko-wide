import React, { useState, useRef, useEffect, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import useThrottle from "../hooks/throttle"
import { InView } from "react-intersection-observer"
import useSize from '@react-hook/size'
import useScreenSize from "../hooks/useScreenSize"
import Scrl from 'scrl'

import Cloud from "../images/cloud.png"
import Forest from "../images/forest.png"
import Gold from "../images/gold.png"
import Sky from "../images/sky.png"


const Project = ({ byline }) => {
	const [openItem, setOpen] = useState(false)
	const [visibleButton, setVisibleButton] = useState(false)
	const myRef = useRef(null)
	const thingyRef = useRef(null)
	const screenSize = useScreenSize();

	const [width, height] = useSize(thingyRef)

	const throttledValue = useThrottle(openItem)

	const scrl = new Scrl()

	const cursorX = useMotionValue(0)
	const cursorY = useMotionValue()
	const springConfig = { damping: 20 }
	const cursorXSpring = useSpring(cursorX, springConfig)

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
					delay: 0.5,
				},
			},
		},
	}

	const stickyButtonEffects = {
		hover: {
			scale: 1.2,
			opacity: 1,
		},
		normal: {
			scale: 1,
			opacity: 1,
			width: 200,
			transition: {
				opacity: {
					duration: 0.25,
				},
			},
		},
		hidden: {
			opacity: 0,
			width: 40,
			scale: 0,
			transition: {
				opacity: {
					duration: 0.25,
				},
			},
		},
	}

	const doTheThing = () => {
		if (throttledValue) {
			setOpen(false)
			
		} else {
			setOpen(true)
			scrl.scrollTo(myRef.current)
			// executeScroll()
		}
	}

	const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"})    

	useEffect(() => {
		const moveCursor = (e) => {
			if (e.clientY > screenSize.height*0.8) {
			if (e.clientX > 75) {
				cursorX.set(e.clientX - 100)
			}
			if (e.clientX < 75) {
				cursorX.set(0)
			}
			} else {
				cursorX.set(screenSize.width/2 - 100)
			}
		}

		console.log(height)

		window.addEventListener("mousemove", moveCursor)

		return () => {
			window.removeEventListener("mousemove", moveCursor)
		}
	}, [])

	return (
		<section>
			<div className="grid grid-cols-12 gap-x-7 px-7">
				<div className="col-span-10">
					<p className="font-['Tiempos_Headline'] font-light text-[140px] leading-[1]">
						{byline}
					</p>
				</div>
			</div>

			<InView
				rootMargin="-100% -50% 0% -50%"
				as="div"
				className="relative px-7"
				onChange={(inView, entry) => {
					// if (inView) {
					// } else {
					// }
					setVisibleButton(inView)
				}}
			>
				<div className="w-full flex" ref={myRef}>
					<motion.div
						layout
						variants={varOne}
						initial="visible"
						animate={throttledValue ? "visible" : "hidden"}
						className="z-10 relative"
					>
						<img className="rounded-lg mb-7" src={Cloud} />
						<div className="grid grid-cols-2 gap-x-7">
							<img className="grid-span-1 rounded-lg mb-7" src={Gold} />
							<img className="grid-span-1 rounded-lg mb-7" src={Sky} />
						</div>
						<img className="rounded-lg mb-7" src={Forest} />
						<img className="rounded-lg mb-7" src={Gold} />
						<img className="rounded-lg mb-7" src={Sky} />
					</motion.div>
					<motion.div
						layout
						variants={varTwo}
						initial="visible"
						animate={throttledValue ? "visible" : "hidden"}
						className="relative z-0"
					>
						<div className="grid grid-cols-6 gap-x-7 h-full w-[50vw] absolute top-0 right-0">
							<div className="col-start-2 col-span-4">
								<div className="sticky py-20 px-20" style={{top: (height-screenSize.height) *-1}} ref={thingyRef}>
									<motion.div
										variants={copyEffect}
										initial="visible"
										animate={throttledValue ? "visible" : "hidden"}
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
			</InView>
			<motion.div
				className="bottom-0 mb-7 z-20 left-0 fixed flex justify-center"
				style={{
					translateX: cursorXSpring,
				}}
				initial={{
					scale: 0
				}}
				animate={visibleButton ? {scale: 1, opacity: 1} : {scale: 0, opacity: 0}}
			>
				<motion.div
					className="w-[200px] text-black text-center leading-[60px] abolute left-0 cursor-pointer"
					onClick={() => doTheThing()}
				>
					<motion.div
						whileHover="hover"
						initial="normal"
						transition={{
							type: "spring",
							bounce: 0,
						}}
						
						variants={stickyButtonEffects}
						className="origin-center z-0 rounded-full absolute top-0 left-0 w-[200px] h-full bg-white"
					></motion.div>
					<motion.span
						className="relative pointer-events-none z-10"
					>
						Project info
					</motion.span>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default Project
