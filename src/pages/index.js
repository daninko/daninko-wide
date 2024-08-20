import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Nav from "../components/nav"
import Project from "../components/project"

const Index = () => {
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
			<main>
				<Project byline="20% increase in global fan submissions" />
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
	}
`

export default Index
