import React, { useState, useRef, useEffect, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import useThrottle from "../hooks/throttle"
import { InView } from "react-intersection-observer"
import useSize from "@react-hook/size"
import useScreenSize from "../hooks/useScreenSize"
import Scrl from "scrl"

import ImgScale from "./portfolio-img"

import Cloud from "../images/cloud.png"
import Forest from "../images/forest.png"
import Gold from "../images/gold.png"
import Sky from "../images/sky.png"

const Project = ({ byline }) => {
	const [openItem, setOpen] = useState(false)
	const [visibleButton, setVisibleButton] = useState(false)
	const myRef = useRef(null)
	const thingyRef = useRef(null)
	const screenSize = useScreenSize()
	const ref = useRef(null)

	const [width, height] = useSize(thingyRef)

	const throttledValue = useThrottle(openItem)

	const scrl = new Scrl({ friction: 0.45 })

	const cursorX = useMotionValue(0)
	const cursorY = useMotionValue()
	const springConfig = { damping: 20 }
	const cursorXSpring = useSpring(cursorX, springConfig)

	const [position, setPosition] = useState({ x: 0, y: 0 })

	const handleMouse = (e) => {
		const { clientX, clientY } = e
		const { height, width, left, top } = ref.current.getBoundingClientRect()
		const middleX = clientX - (left + width / 2)
		const middleY = clientY - (top + height / 2)

		setPosition({ x: middleX, y: middleY })
	}

	const reset = () => {
		setPosition({ x: 0, y: 0 })
	}

	const { x, y } = position

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
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0,
				duration: 1,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				type: "spring",
				bounce: 0,
				duration: 1,
			},
		},
	}

	const stickyButtonEffects = {
		hover: {
			scale: 1.1,
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
		}
	}

	const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" })

	useEffect(() => {
		const moveCursor = (e) => {
			if (e.clientY > screenSize.height * 0.8) {
				if (e.clientX > 100) {
					cursorX.set(e.clientX - 100)
				}
				if (e.clientX < 100) {
					cursorX.set(0)
				}
				if (e.clientX > screenSize.width - 250) {
					cursorX.set(screenSize.width - 250)
				}
			} else {
				cursorX.set(screenSize.width / 2 - 100)
			}
		}

		console.log(height)

		window.addEventListener("mousemove", moveCursor)

		return () => {
			window.removeEventListener("mousemove", moveCursor)
		}
	}, [])

	return (
		<section className="relative">
			<div className="grid grid-cols-12 gap-x-3 px-7">
				<div className="col-span-10">
					<p className="font-['hl'] font-light mb-16 text-[140px] leading-[1]">
						{byline} <span className="font-['s'] text-xl">NBA All-Star Vote</span>
					</p>
				</div>
			</div>

			<div className="relative">
				<InView
					rootMargin="-95% -50% -5% -50%"
					as="div"
					className="relative px-7"
					onChange={(inView, entry) => {
						setVisibleButton(inView)
					}}
				>
					<div className="w-full flex" ref={myRef}>
						<div className="w-full z-10 pointer-events-none">
							<ImgScale size="90vw" value={throttledValue}>
								<img className="w-full rounded mb-3" src={Cloud} />
							</ImgScale>

							<ImgScale size="70vw" value={throttledValue} grid={true}>
								<img className="grid-span-1 rounded mb-3" src={Gold} />
								<img className="grid-span-1 rounded mb-3" src={Sky} />
							</ImgScale>

							<ImgScale size="80vw" value={throttledValue}>
								<img className="w-full rounded mb-3" src={Forest} />
							</ImgScale>

							<ImgScale size="90vw" value={throttledValue}>
								<img className="w-full rounded mb-3" src={Gold} />
							</ImgScale>

							<ImgScale size="80vw" value={throttledValue}>
								<img className="w-full rounded mb-3" src={Sky} />
							</ImgScale>
						</div>
						<div className="h-full w-[50vw] flex justify-center absolute top-0 right-0">
							<div className="relative">
								<div
									className="sticky py-20 px-20"
									style={{ top: (height - screenSize.height) * -1 }}
									ref={thingyRef}
								>
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
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer ultrices est pharetra ultrices tempor. Etiam
											eget felis ligula. Integer tristique blandit egestas.
											Phasellus pellentesque nec quam id aliquam.
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
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Integer ultrices est pharetra ultrices tempor. Etiam
											eget felis ligula. Integer tristique blandit egestas.
											Phasellus pellentesque nec quam id aliquam.
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
					</div>
				</InView>
				<motion.div
					onMouseMove={handleMouse}
					onMouseLeave={reset}
					onClick={doTheThing}
					animate={{ x, y }}
					transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
					ref={ref}
					style={{left: "calc(50% - 100px)"}}
					className="w-[200px] text-black text-center leading-[50px] z-20 sticky bottom-14 cursor-pointer"
				>
					<motion.div
						whileHover="hover"
						initial="normal"
						variants={stickyButtonEffects}
						className="origin-center z-0 rounded-full absolute top-0 left-0 w-[200px] h-full bg-white"
					></motion.div>
					<span className="relative pointer-events-none z-10">Project info</span>
				</motion.div>
			</div>
		</section>
	)
}

export default Project
