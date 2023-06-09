import React, { useState } from 'react'
// import CarouselComp from '../../components/carousel/CarouselComp'
import { SectionGreyMain } from '../../components/main/SectionGreyMain'
import { SectionServiceMainPageComp } from '../../components/main/SectionServiceMainPageComp'
import { useScreens } from '../../constants/Constants'
import { Button, FloatButton } from 'antd'
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constants/animation/AnimationConst'
import { Helmet } from "react-helmet"
import { PhoneOutlined } from '@ant-design/icons'
import { ModalComp } from '../../components/modal/ModalComp'


export const MainPage = () => {
	const screens = useScreens()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const open = () => {
		setIsModalOpen(true)
	}
	const handleCancel = () => {
		setIsModalOpen(false)
	}



	return (
		<div className='z-10'>
			<Helmet>
				<title>{`
				
				
				
				
				
				
				`}</title>
				<meta
					name="description"


					content={''}



				/>
			</Helmet>
			{/* <div className='w-full h-screen bg-cover fon bg-center'></div> */}
			{
				screens.md ?
					<div className='relative'>
						<div className='container mx-auto px-10'>
							{/* <CarouselComp /> */}
							<div className='pt-40'>
								<h1 className='text-5xl text-[#97DF38] font-black uppercase tracking-wide'>Пошив и ремонт салона автомобиля</h1>

								<p className='mt-6 font-light text-[#f5f5f5]'>
									Перешьем руль, перетянем потолок,
									отремонтируем сидения
									<span className='font-bold'>в день обращения</span>
								</p>
							</div>

						</div>
					</div>
					:
					<div className='z-10 relative mb-40 mt-12'>
						{/* <CarouselComp /> */}
						<div className='container px-5 text-white text-center'>
							<motion.div
								className=''
								initial="hidden"
								whileInView="visible"
							>
								<motion.h1
									className='text-3xl font-black uppercase tracking-wide text-[#97DF38]'
									variants={titleAnimation}
								>
									Пошив и ремонт салона автомобиля
								</motion.h1>

								<motion.h2
									className='mt-6 text-lg font-light tracking-wide leading-6'
									variants={titleAnimation2}
								>
									Перешьем руль, перетянем потолок,
									отремонтируем сидения
									в день обращения.
								</motion.h2>

							</motion.div>
						</div>

						<div
							className='text-center mt-8'
						>
							<Button
								type='primary'
								ghost
								onClick={open}
							>
								Расчитать стоимость
							</Button>
						</div>


					</div>
			}



			<SectionServiceMainPageComp />

			<SectionGreyMain />

			<FloatButton.Group
				shape="square"
				style={{
					right: 15,
				}}
			>
				
					<FloatButton icon={<PhoneOutlined />} type="link" href='tel:80296480208' style={{background:'#97DF38'}} />
			
				<FloatButton.BackTop />
			</FloatButton.Group>

			<ModalComp title='Рассчитать стоимость работы' isModalOpen={isModalOpen} handleCancel={handleCancel} />
		</div>
	)
}
