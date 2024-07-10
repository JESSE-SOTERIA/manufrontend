
"use client"

//utilities for keeping track of state, variablesAndExternalEvents(usestate), animation(motion), 
//page to page navigation(Link), icons(Fix, BsBorderWidth)
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FiX } from "react-icons/fi"
import { BsBorderWidth } from "react-icons/bs"



//TODO: make the hero text solid with a translucent background
//give the background a bit more height and width 
//make the background have a gradient

//component declaration
export default function Herosection() {
	const [height, setHeight] = useState(window.innerHeight * 0.75)
	//opening and closing the menu bar for links to pages.
	const [menuOpen, setMenuOpen] = useState(false)
	//height for the component
	const minHeight = window.innerHeight * 0.07
	const maxHeight = window.innerHeight * 0.75

	function handleScroll() {
		const scrollPos = window.scrollY
		setMenuOpen(false)
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

	//variants for animation of the menu window.(framer motion utility)
	const list = {
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
		hidden: {
			opacity: 0,
		},
	}

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -50 },
	}

	return (
		<motion.section
			className="bg-hero bg-center bg-no-repeat bg-cover flex flex-col w-full"
			style={{ height }}
			animate={{ height }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex justify-between items-center content-center px-4">
				<h1 className="w-11/12">Manukatto</h1>
				<button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl z-20">
					{menuOpen ? <FiX /> : <BsBorderWidth />}
				</button>
			</div>
			<motion.div
				initial={{ x: '100%' }}
				animate={{ x: menuOpen ? '0%' : '100%' }}
				transition={{ type: "spring", stiffness: 300, damping: 30 }}
				className="fixed top-0 right-0 h-full w-2/3 bg-customWhite flex flex-col justify-center"
			>
				<motion.ul
					initial="hidden"
					animate={menuOpen ? "visible" : "hidden"}
					variants={list}
					className="flex flex-col"
				>
					<Link href={"/services"}>
						<motion.li variants={item} className="text-customLight text-center py-1.5">
							Services
						</motion.li>
					</Link>
					<Link href={"/about_us"}>
						<motion.li variants={item} className="text-customLight text-center py-1.5">
							About Us
						</motion.li>
					</Link>
					<Link href={"/booking"}>
						<motion.li variants={item} className="text-customLight text-center py-1.5">
							Bookings
						</motion.li>
					</Link>
				</motion.ul>
			</motion.div>
			<div className="flex flex-col self-stretch pt-28 pl-8 justify-center w-11/12 mx-auto">
				<p className="bg-customLight opacity-75">Crafting beauty, one tip at a time</p>
			</div>
		</motion.section>
	)
}
