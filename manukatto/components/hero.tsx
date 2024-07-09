
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"


//TODO: use variants to animate the following:
//		should be child text of the hero component.
//		child text should fade in full before the component achieves min height and back again.
//		background color should be changed to solid when height is min.
//		should be a manukatto link(to home) that ony appears when the height is min.

//NOTE: make sure to read each word of the following (WARN)

//WARN: pass the height of the herocomponent as props to children(or just use it directly as it is part of the scope)
//set the visibility and activity of the children based on the height of the parent(min or max)
//make the unordered list [position: absolute] to be able to give it an independent height
//make sure the component animates to a solid background color in the (min height state.)
//make sure this component is pinned during scrolling in the main page.
//

export default function Herosection() {
	const [height, setHeight] = useState(window.innerHeight * 0.75)
	const minHeight = window.innerHeight * 0.07
	const maxHeight = window.innerHeight * 0.75

	function handleScroll() {
		const scrollPos = window.scrollY
		if (scrollPos > minHeight) {
			setHeight(minHeight)
		} else {
			setHeight(maxHeight)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])


	//animation variants
	const list = {
		visible: {
			opacity: 1,
			height: "1/3",
			width: "7/12",
			transition: {
				staggerChildren: 0.3,
			},
		},
		hidden: {
			opacity: 1,
			height: "1/3",
			width: "7/12"
		},
	}
	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -50 },
	}

	return (
		<motion.section
			className="bg-hero bg-center bg-no-repeat bg-cover flex flex-col"
			style={{ height }}
			animate={{ height }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex ">
				<h1 className="w-11/12">Manukatto</h1>
				<motion.ul initial="hidden" animate="visible" variants={list} className="h-1/3 w-1/12 border border-customLight flex flex-col justify-center">
					<Link href={"/services"}> <motion.li variants={item} className="text-customLight text-center py-1.5">services</motion.li> </Link>
					<Link href={"/about_us"}> <motion.li variants={item} className="text-customLight text-center  py-1.5">about us</motion.li> </Link>
					<Link href={"/booking"}> <motion.li variants={item} className="text-customLight text-center py-1.5">bookings</motion.li> </Link>
				</motion.ul>
			</div>
			<div className="flex flex-col justify-center">

				<p className="bg-customWhite">Crafting beauty, one tip at a time</p>
			</div>



		</motion.section>
	)
}
