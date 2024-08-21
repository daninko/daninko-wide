import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Project from "../components/project"
import { Header } from "../components/header"

const Index = ({ data }) => {
	return (
		<>
			<Nav page="/about" isHome={true} />
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
						<h2 className="font-['hl'] font-light text-[140px] leading-[1.1]">
							A strategically-minded designer helping teams plan and build innovative
							digital products.{" "}
							<span className="py-1 font-['s'] text-xl border-b border-[#f9f9f9] tracking-normal border-solid">
								more +
							</span>
						</h2>
					</div>
				</motion.div>
				<motion.div
					className="w-full h-full absolute top-0 bg-[#51AFE3]"
					initial={{ left: "100vw" }}
					exit={{ left: "0vw", transition: { type: "spring", bounce: 0, duration: 0.5 } }}
				></motion.div>
			</header>
			<main>
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
