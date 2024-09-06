import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Project from "../components/project"
import { Header } from "../components/header"

const Index = ({ data }) => {
	console.log(data)
	return (
		<>
			<Nav page="/about" isHome={true} data={data} />

			<main>
				<header className="pt-[100px] relative overflow-hidden">
					<motion.div
						initial={{ left: 0 }}
						exit={{
							left: "-100vw",
							transition: { type: "spring", bounce: 0, duration: 0.5 },
						}}
						className="h-full relative pb-[95vh] grid grid-cols-12 gap-x-7 px-7"
					>
						<div className="col-span-10">
							<h2
								className="font-['hl'] font-light text-[140px] leading-[1.1]"
							>
								{data.site.siteMetadata.homeHeadline}{" "}
								<span className="py-1 font-['s'] text-xl border-b border-[#f9f9f9] tracking-normal border-solid">
									more +
								</span>
							</h2>
						</div>
					</motion.div>
					<motion.div
						className="w-full h-full absolute top-0 bg-[#3C4941]"
						initial={{ left: "100vw" }}
						exit={{
							left: "0vw",
							transition: { type: "spring", bounce: 0, duration: 0.5 },
						}}
					>
						<div className="px-7">
							<ul
								className="text-[120px] font-['hl'] leading-[1.1]"
								style={{ paddingTop: "calc(50vh - 70px)" }}
							>
								{data.site.siteMetadata.about.map(({node}, i) => (
									<motion.span
										className="z-10 relative block"
										style={{opacity: i===0 ? 1 : 0.2}}
									>
										{ data.site.siteMetadata.about[i].text }
									</motion.span>
								))}
							</ul>
						</div>
					</motion.div>
				</header>
				{data.allMdx.edges.map(({ node }, i) => {
					return <Project content={node} />
				})}

				<div className="h-screen"></div>
			</main>
			<Footer />
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
		allMdx {
			edges {
				node {
					body
					frontmatter {
						title
						project
						link
						assets {
							image {
								childImageSharp {
									gatsbyImageData(
										layout: FULL_WIDTH
										formats: WEBP
										webpOptions: { quality: 100 }
									)
								}
							}
							size
						}
					}
				}
			}
		}
	}
`

export default Index
