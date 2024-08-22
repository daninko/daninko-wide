import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Nav from "../components/nav"
import { Header } from "../components/header"
import Footer from "../components/footer"
import AboutHover from "../components/about-hover"

const About = ({ data }) => {
	return (
		<>
			<div style={{ minHeight: "100vh" }} className="bg-[#3C4941]">
				<Nav page="/" isHome={false} data={data} />
				<main>
					<header className="relative overflow-hidden">
						<motion.div
							className="w-full relative bg-[#3C4941]"
							style={{minHeight: "100vh"}}
							initial={{ left: "0vw" }}
							exit={{
								left: "100vw",
								transition: { type: "spring", bounce: 0, duration: 0.5 },
							}}
						>
							<div className="px-7">
								<ul className="text-[120px] font-['hl'] leading-[1.1]" style={{paddingTop: "calc(50vh - 70px)"}}>
									{data.site.siteMetadata.about.map((node) => (
										<AboutHover>{node.text}</AboutHover>
									))}
								</ul>
							</div>
						</motion.div>
						<motion.div
							initial={{ left: "-100vw" }}
							exit={{
								left: "0vw",
								transition: { type: "spring", bounce: 0, duration: 0.5 },
							}}
							className="h-full absolute pt-[100px] top-0 w-screen box-border pb-[95vh] grid grid-cols-12 gap-x-7 px-7 bg-[#1a1d1f]"
						>
						</motion.div>
					</header>
				</main>
				<Footer data={data} />
			</div>
		</>
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
				title
				description
				url
				author
				position
				homeHeadline
				contactMethods {
					text
					link
				}
				about {
					text
				}
			}
		}
	}
`

export default About
