import React, { useState, useEffect } from 'react'
import { dataRul, dataSalon } from '../../constants/portfolio/PortfolioConst'
import {
	useLocation,
} from 'react-router-dom'
import { Image } from 'antd'
import { motion } from "framer-motion"

export const Portfolio = () => {
	const [data, setData] = useState([])

	let location = useLocation()

	useEffect(() => {
		switch (location.pathname) {
			case '/uslugi/peretyazhka-rulya':
				setData(dataRul)
				break
			case '/uslugi/peretyazhka-salona':
				setData(dataSalon)
				break

		}
	}, [location.pathname])

	return (
		<motion.section
			className='container pb-10 pt-16'
			initial="hidden"
			whileInView="visible"
		>
			{
				data.map(el => {

					return (
						<motion.div
							className='text-center mb-6'
						>
							<span className='uppercase text-[#f5f5f5]'>
								{el.title}
							</span>
							{
								el.video ?
								
								<video src={el.video}
									
									autoPlay
									playsInline
									muted
									loop
									defaultMuted
									className='rounded-lg mt-3'
								/>
								
									:

									<Image src={el.img} preview={false} className='rounded-lg shadow-xl mt-3' />
							}
							
						</motion.div>
					)
				})
			}
			{
				data.length ?
					<p className='mt-8 uppercase text-xs font-light text-[#97DF38] pl-1'>
						Больше фотографий и видео работ по перетяжке Вы можете посмотреть в {' '}
						<a href='https://www.instagram.com/aleksandr2xx7' target='_blank' className='underline'>instagram</a>
					</p>
					:
					undefined
			}

		</motion.section>
	)
}
