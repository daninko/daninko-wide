import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import useThrottle from "../hooks/throttle"
import useSize from "@react-hook/size"
import useScreenSize from "../hooks/useScreenSize"
import Scrl from "scrl"

import ImgScale from "./portfolio-img"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const Project = ({ byline, children, content }) => {
	const [openItem, setOpen] = useState(false)
	const myRef = useRef(null)
	const thingyRef = useRef(null)
	const screenSize = useScreenSize()

	const [tipOne, setTipOne] = useState(false)
	const [tipTwo, setTipTwo] = useState(false)

	const [width, height] = useSize(thingyRef)

	const throttledValue = useThrottle(openItem)

	const scrl = new Scrl({ friction: 0.45 })

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

	const doTheThing = () => {
		if (throttledValue) {
			setOpen(false)
		} else {
			setOpen(true)
			scrl.scrollTo(myRef.current)
		}
	}

	useEffect(() => {

	}, [])

	return (
		<section className="relative mb-[750px]">
			<div className="grid grid-cols-12 gap-x-3 px-7">
				<div className="col-span-10">
					<h2 className="font-['hl'] font-light mb-16 text-[140px] leading-[1]">
						{content.frontmatter.title}{" "}
						<span className="font-['i'] text-[21px] tracking-normal">{content.frontmatter.project}</span>
					</h2>
				</div>
			</div>

			<div className="relative">
				<div
					className="absolute z-30 top-20 left-0 w-full pointer-events-none"
					style={{ height: "calc(100% - 7rem)" }}
				>
					<div className="w-full sticky top-20 left-0 grid grid-cols-12 gap-x-3 px-7 box-border">
						<div className="col-span-1 col-start-12 pl-3">
							<button
								onClick={doTheThing}
								onMouseOver={() => setTipOne(true)}
								onMouseOut={() => setTipOne(false)}
								className="pointer-events-auto w-[70px] h-[70px] relative cursor-pointer rounded-full border flex items-center justify-center mx-auto mb-2 border-[rgba(255,255,255,0.1)] wang-jangle"
							>
								<motion.span
									initial={{ opacity: 0, x: -20 }}
									animate={tipOne ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
									transition={{ type: "spring", bounce: 0, duration: 0.35 }}
									className="pointer-events-none absolute text-nowrap px-3 leading-[40px] rounded-[4px] inline-block text-sm right-[80px] bg-[rgba(255,255,255,0.9)] text-black top-[15px]"
								>
									{throttledValue ? "hide details" : "see details"}
								</motion.span>
								{throttledValue && (
									<span className="material-symbols-outlined pointer-events-none" style={{fontSize: "40px"}}>
										close_small
									</span>
								)}
								{!throttledValue && (
									<span
										className="material-symbols-outlined pointer-events-none"
										style={{ transform: "rotate(180deg)", fontSize: "40px" }}
									>
										read_more
									</span>
								)}
							</button>
							{ content.frontmatter.link !== "none" && 
								<a href={content.frontmatter.link}
								onMouseOver={() => setTipTwo(true)}
								onMouseOut={() => setTipTwo(false)}
								className="pointer-events-auto w-[70px] h-[70px] relative cursor-pointer rounded-full border flex items-center justify-center mx-auto border-[rgba(255,255,255,0.1)] wang-jangle"
							>
								<motion.span
									initial={{ opacity: 0, x: -20 }}
									animate={tipTwo ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
									transition={{ type: "spring", bounce: 0, duration: 0.35 }}
									className="pointer-events-none absolute text-nowrap px-3 leading-[40px] rounded-[4px] inline-block text-sm right-[80px] bg-[rgba(255,255,255,0.9)] text-black top-[15px]"
								>
									see live
								</motion.span>
								<span
									className="material-symbols-outlined"
									style={{ fontSize: "32px" }}
								>
									arrow_outward
								</span>
							</a>
							}
							
						</div>
					</div>
				</div>
				<div className="relative mx-7">
					<div className="w-full grid grid-cols-12 gap-x-3" ref={myRef}>
						<div className="col-span-11 z-10 pointer-events-none">
							{content.frontmatter.assets.map((i) => {
								
								return (
									<ImgScale
										size={i.size}
										grid={i.image.length > 1 ? true : false}
										value={throttledValue}
									>
										{i.image.map((j) => {
											const g = getImage(j)
											return (
												<>
													<GatsbyImage
														image={g}
														className="rounded mb-3"
														alt=""
													/>
												</>
											)
										})}
									</ImgScale>
								)
							})}
						</div>
					</div>
					<div className="h-full w-full grid grid-cols-12 gap-x-3 absolute top-0 right-0">
						<div className="relative col-span-4 col-start-8">
							<div
								className="sticky py-20 pl-10 pr-20"
								style={{ top: (height - screenSize.height) * -1 }}
								ref={thingyRef}
							>
								<motion.div
									variants={copyEffect}
									initial="visible"
									animate={throttledValue ? "visible" : "hidden"}
									dangerouslySetInnerHTML={{ __html: content.body }}
								></motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Project
