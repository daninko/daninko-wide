import React, { useEffect, useRef, useState } from "react"
import { graphql } from "gatsby"
import { motion, useTransform } from "motion/react"

import { ReactLenis } from "lenis/react"

import useMouse from "@react-hook/mouse-position"

import Nav from "../components/nav"
import { Header } from "../components/header"
import { Foot } from "../components/foot"
import Slideshow from "../components/slideshow"
import IndexWorkItem from "../components/index-workitem"

const Index = ({ data }) => {
	const ref = useRef(null)

	const [whichDir, setWhich] = useState("default")

	const leftVariants = {
		default: {
			opacity: 0,
		},
		left: {
			opacity: 1,
		},
		right: {
			opacity: 0,
		},
	}

	const rightVariants = {
		default: {
			opacity: 0,
		},
		left: {
			opacity: 0,
		},
		right: {
			opacity: 1,
		},
	}

	const mouse = useMouse(ref, {
		fps: 165,
		enterDelay: 100,
		leaveDelay: 100,
	})

	return (
		<div className="flex flex-nowrap" style={{ width: "fit-content" }} ref={ref}>
			<div
				style={{
					width: "1px",
					height: "1px",
					position: "fixed",
					top: mouse.clientY - 16,
					left: mouse.clientX - 38,
					pointerEvents: "none",
				}}
			>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="38"
					height="32"
					viewBox="0 0 38 32"
					fill="none"
					className="absolute top-0 left-0"
					variants={rightVariants}
					initial="default"
					animate={whichDir}
					transition={{
						duration: 0.15,
					}}
				>
					<path
						d="M21.2217 0.878906C20.9817 1.12096 20.8477 1.44862 20.8477 1.78906C20.8477 2.12946 20.9819 2.45712 21.2217 2.69922L33.1289 14.7109H1.78223C1.44078 14.711 1.11413 14.8476 0.874023 15.0898C0.634039 15.332 0.5 15.6595 0.5 16C0.5 16.3405 0.634039 16.668 0.874023 16.9102C1.11413 17.1524 1.44078 17.289 1.78223 17.2891H33.1289L21.2217 29.3008C20.9819 29.5429 20.8477 29.8705 20.8477 30.2109C20.8477 30.5514 20.9817 30.879 21.2217 31.1211C21.4619 31.3634 21.7893 31.5 22.1309 31.5C22.4722 31.4999 22.799 31.3632 23.0391 31.1211L37.126 16.9102C37.2448 16.7903 37.3392 16.6482 37.4033 16.4922C37.4674 16.3361 37.5 16.1687 37.5 16L37.4941 15.874C37.4819 15.7484 37.4514 15.6249 37.4033 15.5078C37.3392 15.3518 37.2448 15.2097 37.126 15.0898L23.0391 0.878906C22.799 0.636751 22.4722 0.500114 22.1309 0.5C21.7893 0.5 21.4619 0.636622 21.2217 0.878906Z"
						fill="#F9F9F9"
					/>
				</motion.svg>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="38"
					height="32"
					viewBox="0 0 38 32"
					fill="none"
					className="absolute top-0 left-[38px]"
					variants={leftVariants}
					initial="default"
					animate={whichDir}
					transition={{
						duration: 0.15,
					}}
				>
					<path
						d="M16.7783 31.1211C17.0183 30.879 17.1523 30.5514 17.1523 30.2109C17.1523 29.8705 17.0181 29.5429 16.7783 29.3008L4.87109 17.2891L36.2178 17.2891C36.5592 17.289 36.8859 17.1524 37.126 16.9102C37.366 16.668 37.5 16.3405 37.5 16C37.5 15.6595 37.366 15.332 37.126 15.0898C36.8859 14.8476 36.5592 14.711 36.2178 14.7109L4.87109 14.7109L16.7783 2.69922C17.0181 2.45712 17.1523 2.12946 17.1523 1.78906C17.1523 1.44862 17.0183 1.12096 16.7783 0.878906C16.5381 0.636623 16.2107 0.5 15.8691 0.5C15.5278 0.500114 15.201 0.636751 14.9609 0.878906L0.874023 15.0898C0.755173 15.2097 0.660778 15.3518 0.59668 15.5078C0.532562 15.6639 0.5 15.8313 0.5 16L0.505859 16.126C0.51812 16.2516 0.548569 16.3751 0.59668 16.4922C0.660782 16.6482 0.755177 16.7903 0.874023 16.9102L14.9609 31.1211C15.201 31.3632 15.5278 31.4999 15.8691 31.5C16.2107 31.5 16.5381 31.3634 16.7783 31.1211Z"
						fill="#F9F9F9"
					/>
				</motion.svg>
			</div>

			<ReactLenis
				root
				options={{
					orientation: "horizontal",
				}}
			/>
			<Nav page="/about" isHome={true} data={data} />
			<div className="ml-[500px]"></div>
			<a href="#" className="fixed top-0 right-0 px-[20px] py-[20px] z-[500]">
				Close
			</a>

			{data.allMdx.edges.map(({ node }, i) => {
				return (
					<>
						<IndexWorkItem data={node} />
					</>
				)
			})}

			<div className="flex items-center mr-[300px]">
				<div>
					<p className="text-[36px] font-light w-[38ch]">
						I have a decade of experience working innovative digital products for
						enterprise, entertainment, healthcare, fintech, and nonprofit.
						Collaboration, adaptation, and context are my keys to success.
					</p>
					<p className="text-[36px] font-light w-[38ch]">
						I also mentor senior design students at SFU's School of Interactive Arts and
						Technology, and have spoken at Touchpoint, an annual interaction design
						conference in Vancouver.
					</p>
				</div>
			</div>

			<Foot />
		</div>
	)
}

export const Head = ({ data }) => {
	return (
		<>
			<Header data={data} />
		</>
	)
}

export const query = graphql`
	query MyQuery {
		site {
			siteMetadata {
				author
				description
				title
				url
				position
				homeHeadline
				contactMethods {
					link
					text
				}
			}
		}
		allMdx(filter: { frontmatter: { collection: { eq: "projects" } } }) {
			edges {
				node {
					body
					frontmatter {
						assets {
							src {
								childImageSharp {
									gatsbyImageData(
										layout: FULL_WIDTH
										formats: WEBP
										webpOptions: { quality: 100 }
									)
								}
							}
							type
						}
						title
						project
						link
						case
						blurb
						results
					}
				}
			}
		}
		mdx(frontmatter: { collection: { eq: "about" } }) {
			id
			frontmatter {
				content {
					text
				}
			}
		}
	}
`

export default Index
