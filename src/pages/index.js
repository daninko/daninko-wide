import React, { useEffect, useState } from "react"

import Nav from "../components/nav"
import Project from "../components/project"



const Index = () => {
	return (
		<>
			<Nav></Nav>
			<header className="h-screen">
				<div className="grid grid-cols-12 gap-x-7 px-7">
					<div className="col-span-10">
						<p className="font-['Tiempos_Headline'] font-light text-[140px] leading-[1]">
							A strategically-minded designer helping teams plan and build innovative
							digital products. 
						</p>
					</div>
				</div>
			</header>
			<main>
				<Project byline="Making the voices of millions of fans heard" />
				<Project byline="Making the voices of millions of fans heard" />
			</main>
			<footer></footer>
		</>
	)
}

export default Index
