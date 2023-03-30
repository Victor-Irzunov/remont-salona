import React from 'react'
import img from '../../images/click.svg'
import { Divider, Image } from 'antd'
import { data } from '../../constants/main/MainConst'
import { motion } from "framer-motion"
import { yAnimation } from '../../constants/animation/AnimationConst'
import { Link } from 'react-router-dom'
import CyrillicToTranslit from 'cyrillic-to-translit-js'

export const SectionServiceMainPageComp = () => {
	const cyrillicToTranslit = new CyrillicToTranslit()

	return (
		<section
			className='mt-20 mb-10 pb-12 xyy:px-5 sm:container sm:mx-auto relative bg-[#f5f5f5]'
		>
			<Divider/>
			{data.map((el, idx) => {
				return (
					<motion.div
						className='mt-10'
						initial="hidden"
						whileInView="visible"
						key={el.id}
						
					>
						<motion.div
							variants={yAnimation}
						>
							<p className='text-gray-500 uppercase text-xs tracking-wider'>
								{el.name}
							</p>

							<div className=''>
								<h2 className='font-black text-xl text-[#0C142C]'>
									{el.h2}
								</h2>
								<p className='font-light'>
									{el.text}
								</p>
								<Image src={el.img} preview={false}  className='shadow-2xl rounded-xl'/>
							</div>

							<div className='text-right mt-3'>
								<Link to={`/uslugi/${cyrillicToTranslit.transform(el.link.split(' ').join('-'))}`} className='uppercase'>
									подробнее <Image preview={false} src={img} style={{ width: '16px', marginLeft: '3px'}}  />
								</Link>
							</div>
							{
								idx !== data.length - 1 &&
								<Divider />
							}
						</motion.div>
					</motion.div>
				)
			})}
		</section>
	)
}
