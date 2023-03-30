import React from 'react'
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constants/animation/AnimationConst'
import logo3 from '../../images/logo/logo3.webp'
import { Image } from 'antd'

export const SectionGreyMain = () => {
	return (
		<section className='bg-[#0C142C] text-[#F4F4F4] px-5 py-10 mt-20 relative'>
			<motion.div
				className=''
				initial="hidden"
				whileInView="visible"
			>
				<motion.div
					className='mb-4'
					variants={titleAnimation}
				>
					<Image src={logo3} width='300px' />
				</motion.div>
				<motion.p
					className='font-light leading-6 text-lg tracking-wide'
					variants={titleAnimation2}
				>
					Наш опыт перетяжки и ремонта салона более чем 20 лет, за это время мы получили огромный опыт и собрали команду настоящих профессионалов.
					Обращаясь к нам Вы получаете качественный сервис по доступным ценам.
				</motion.p>
			</motion.div>
		</section>
	)
}
