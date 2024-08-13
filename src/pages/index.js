import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../components/nav"

import Cloud from "../images/cloud.png"

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
				<section>
					<div className="grid grid-cols-12 gap-x-7 px-7">
						<div className="col-span-10">
							<p className="font-['Tiempos_Headline'] font-light text-[140px] leading-[1]">
								Making the voices of millions of basketball fans heard 
							</p>
						</div>
					</div>
					<div className="grid grid-cols-12 gap-x-7 px-7">
						<div className="col-span-6">
							<img
								className="rounded-lg mb-7"
								src={Cloud}
							/>
							<img
								className="rounded-lg mb-7"
								src={Cloud}
							/>
							<img
								className="rounded-lg mb-7"
								src={Cloud}
							/>
							<img
								className="rounded-lg mb-7"
								src={Cloud}
							/>

						</div>
						<div className="col-span-6 flex flex-nowrap justify-end relative">
							<div className="w-screen min-w-[100vw] grid grid-cols-12 gap-x-7 h-full relative">
								<div className="col-start-8 col-span-4">
									<div className="sticky top-0">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Integer ultrices est pharetra ultrices tempor. Etiam eget
										felis ligula. Integer tristique blandit egestas. Phasellus
										pellentesque nec quam id aliquam.
									</p>

									<p>
										Duis pulvinar ligula eget nulla tincidunt, eget maximus
										velit luctus. Aenean ac euismod tortor. Morbi lacus nisl,
										sollicitudin eget hendrerit sed, volutpat sed elit. Vivamus
										turpis nisl, vulputate ac sem non, posuere dapibus orci.
									</p>

									<p>
										Donec nec ante blandit, vestibulum velit non, semper metus.
										Curabitur scelerisque lorem vel feugiat pharetra. Integer
										rhoncus massa a blandit semper. In nunc lacus, molestie nec
										turpis id, suscipit auctor sem.
									</p>

									<p>
										Etiam efficitur laoreet lorem, non vestibulum nulla posuere
										sed. Nam convallis orci urna, nec sodales ex fringilla sit
										amet. Nulla eget nunc facilisis, elementum eros quis,
										suscipit nibh.
									</p>

									<p>
										In hendrerit et diam vitae tincidunt. Nunc a dui mauris.
										Maecenas vestibulum justo eu metus efficitur, vitae accumsan
										ligula imperdiet. Sed a urna lorem. Cras et lectus sed
										lectus rutrum accumsan.
									</p>
								</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer></footer>
		</>
	)
}

export default Index
