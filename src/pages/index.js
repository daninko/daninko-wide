import React, { } from "react"
import { graphql } from "gatsby"

import Nav from "../components/nav"
import Project from "../components/project"

const Index = ({ data }) => {
	return (
		<>
			<Nav></Nav>
			<header className="h-[120vh] py-7">
				<div className="grid grid-cols-12 gap-x-7 px-7">
					<div className="col-span-10">
						<p className="font-['hl'] font-light text-[140px] leading-[1.1]">
							A strategically-minded designer helping teams plan and build innovative
							digital products.{" "}
							<span className="py-1 font-['s'] text-xl border-b border-[#f9f9f9] border-solid">
								more +
							</span>
						</p>
					</div>
				</div>
			</header>
			{/* {data.allMdx.edges.map(({ node }, i) => {
				return (
					<>
						<div dangerouslySetInnerHTML={{ __html: node.body }} />
					</>
				)
			})} */}
			<main>
				{data.allMdx.edges.map(({ node }, i) => {
					return(
						<Project content={node} />
					)
				})}

				<div className="h-screen"></div>
			</main>
			<footer></footer>
		</>
	)
}

export const Head = () => (
	<>
		<html lang="en" prefix="og: http://ogp.me/ns#" />
		<title>Dan Nanasi</title>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
	</>
)

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
						assets {
							image {
								childImageSharp {
									gatsbyImageData(layout:FULL_WIDTH, formats: WEBP, webpOptions: {quality: 100})
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
