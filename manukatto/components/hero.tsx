
"use client"


import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FiX } from "react-icons/fi"
import { BsBorderWidth } from "react-icons/bs"

export default function Herosection() {
	const [height, setHeight] = useState(window.innerHeight * 0.75)
	const [menuOpen, setMenuOpen] = useState(false)
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
		hidden: { opacity: 0, x: -30 },
	}

	return (
		<motion.section
			className="bg-hero bg-center bg-no-repeat bg-cover flex flex-col w-full"
			style={{ height }}
			animate={{ height }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex justify-between items-center px-4">
				<h1 className="w-11/12">Manukatto</h1>
				<button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
					{menuOpen ? <FiX /> : <BsBorderWidth />}
				</button>
			</div>
			<motion.ul
				initial="hidden"
				animate={menuOpen ? "visible" : "hidden"}
				variants={list}
				className={`fixed top-0 right-0 h-full w-2/3 bg-customWhite flex flex-col justify-center transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
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
			<div className="flex flex-col justify-center w-11/12 mx-auto">
				<p className="bg-customWhite">Crafting beauty, one tip at a time</p>
			</div>
		</motion.section>
	)
}
