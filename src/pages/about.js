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
							style={{ minHeight: "100vh" }}
							initial={{ left: "0vw" }}
							exit={{
								left: "100vw",
								transition: { type: "spring", bounce: 0, duration: 0.5 },
							}}
						>
							<div className="px-7">
								<ul
									className="text-[120px] font-['hl'] leading-[1.1]"
									style={{ paddingTop: "calc(50vh - 70px)" }}
								>
									{data.mdx.frontmatter.content.map(
										({ node }, i) => (
											<AboutHover
												slightFade={i === 0}
												image={
													data.mdx.frontmatter.content[i]
														.image
												}
											>
												{
													data.mdx.frontmatter.content[i]
														.text
												}
											</AboutHover>
										)
									)}
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
							<div className="col-span-10">
								<h2 className="font-['hl'] font-light text-[140px] leading-[1.1]">
									{data.site.siteMetadata.homeHeadline}{" "}
									<span className="py-1 font-['s'] text-xl border-b border-[#f9f9f9] tracking-normal border-solid">
										more +
									</span>
								</h2>
							</div>
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
		mdx(frontmatter: {collection: {eq: "about"}}) {
			id
			frontmatter {
				content {
					image {
						childImageSharp {
							gatsbyImageData(
								layout: FULL_WIDTH
								formats: WEBP
								webpOptions: { quality: 100 }
							)
						}
					}
					text
				}
			}
		}
	}
`

export default About
