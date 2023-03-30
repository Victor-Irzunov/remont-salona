import React, { useEffect, useState } from 'react'
import { Divider, Image, Tag, FloatButton } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import {
	titleAnimation,
	titleAnimation2,
	yAnimation
} from '../../constants/animation/AnimationConst'
import {
	dataRul,
	dataSalon,
	dataPotolok,
	dataKPP,
	dataTorpedo,
	dataRemontSalona
} from '../../constants/service/ServiceConst'
import {
	useLocation,
} from 'react-router-dom'
import { PhoneOutlined } from '@ant-design/icons'
import { ModalComp } from '../../components/modal/ModalComp'
import { Portfolio } from '../../components/portfolio/Portfolio'

export const ServicePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [data, setData] = useState([])

	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}
	// let data
	let location = useLocation()

	useEffect(() => {
		switch (location.pathname) {
			case '/uslugi/peretyazhka-rulya':
				setData(dataRul)
				break
			case '/uslugi/peretyazhka-salona':
				setData(dataSalon)
				break
			case '/uslugi/peretyazhka-potolka':
				setData(dataPotolok)
				break
			case '/uslugi/peretyazhka-ruchki-kpp':
				setData(dataKPP)
				break
			case '/uslugi/peretyazhka-torpedo':
				setData(dataTorpedo)
				break
			case '/uslugi/remont-salona':
				setData(dataRemontSalona)
				break
		}
	}, [location.pathname])



	return (
		<section className='pt-10 relative '>

			<FloatButton.Group
				shape="square"
				style={{
					right: 15,
				}}
			>
				<FloatButton icon={<PhoneOutlined className='' />} type="primary" />
				<FloatButton.BackTop />
			</FloatButton.Group>
			{
				data.length && data.map(el => {
					return (
						<React.Fragment key={el.id}>
							<Helmet>
								<title>{el.h1}</title>
								<meta name="description" content={el.h2} />
							</Helmet>
							<div className=''>
								<motion.div
									className='xyy:px-5 pb-6 sm:container sm:mx-auto text-[#f5f5f5] mt-4 mb-24'
									initial="hidden"
									whileInView="visible"
								>
									<motion.h1
										className='text-2xl uppercase font-black text-[#97DF38]'
										variants={titleAnimation}
									>
										{el.h1}
									</motion.h1>
									<motion.h2
										className='font-light text-sm '
										variants={titleAnimation2}
									>
										{el.h2} {' '}
										{/* <Image src={hours} style={{width:'25px', marginTop:'5px'}} /> */}

									</motion.h2>

								</motion.div>

								<div className='bg-[#f5f5f5] xyy:px-5 pb-20 sm:container sm:mx-auto pt-1'>
									<motion.div
										className='mt-10 overflow-hidden'
										initial="hidden"
										whileInView="visible"
									>
										<motion.div
											variants={yAnimation}
											className=''
										>

											<h3 className='text-lg tracking-wider font-semibold mb-6 uppercase'>
												{el.h3}
											</h3>
											<motion.div>
												<Image
													src={el.img}
													preview={false}
													className='shadow-xl rounded-lg'
												/>
											</motion.div>


											<ul className='font-light list-disc mt-8'>

												{el.list.map((elem, idx) => {
													return (
														<li className='mb-2' key={idx}>
															<p className='uppercase text-sm mb-4 font-semibold'>
																{elem.b}
															</p>
															<p className='font-light text-sm'>
																{elem.text}
															</p>
															<p className='uppercase text-xs'>
																Стоимость от <span className='font-semibold text-base'>{elem.price} BYN</span>
															</p>
															<p className='text-xs'>
																время работы от <span className=''>{elem.time}</span>
															</p>
															<Divider />
														</li>
													)
												})}
											</ul>
											<p className='text-xs text-gray-600 font-light mt-10'>
												<InfoCircleTwoTone /> Точную стоимость и сроки выполнения Вы можете узнать позвонив по телефону +375 (29) 648-02-08 либо отправив нам сообщение (кнопка ниже).
											</p>
											<Tag
												color="green"
												onClick={() => showModal('Стоимость и сроки')}

											>
												узнать стоимость и сроки
											</Tag>

										</motion.div>
									</motion.div>

									{el.list2 ?
										<>
											<Divider />

											<motion.div
												className='mt-10 overflow-hidden'
												initial="hidden"
												whileInView="visible"
											>
												<motion.div
													variants={yAnimation}
												>
													<h3 className='text-lg tracking-wider font-semibold mb-6 uppercase'>
														{el.h3_2}
													</h3>

													<motion.div>
														<Image
															src={el.img2}
															preview={false}
															className='shadow-2xl rounded-lg'
														/>
													</motion.div>

													<ul className='font-light list-disc mt-8'>

														{el.list.map((elem, idx) => {
															return (
																<li className='mb-2' key={idx}>
																	<p className='uppercase text-sm mb-4'>
																		{elem.b}
																	</p>
																	<p className='font-light'>
																		{elem.text}
																	</p>
																	<p className='uppercase text-xs'>
																		Стоимость от <span className='font-semibold text-base'>{elem.price} BYN</span>
																	</p>
																	<p className='text-sm'>
																		время работы от <span className=''>{elem.time}</span>
																	</p>
																	<Divider />
																</li>
															)
														})}
													</ul>
													<p className='text-xs text-gray-600 font-light mt-10'>
														<InfoCircleTwoTone /> Точную стоимость и сроки выполнения Вы можете узнать позвонив по телефону +375 (29) 648-02-08 либо отправив нам сообщение (кнопка ниже).
													</p>
													<Tag
														color="green"
														onClick={() => showModal('Стоимость и сроки')}

													>
														узнать стоимость и сроки
													</Tag>
												</motion.div>
											</motion.div>
										</>
										:
										undefined
									}
									{el.list3 ?
										<>
											<Divider />

											<motion.div
												className='mt-10 overflow-hidden'
												initial="hidden"
												whileInView="visible"
											>
												<motion.div
													variants={yAnimation}
												>
													<h3 className='text-lg tracking-wider font-semibold mb-6 uppercase'>
														{el.h3_3}
													</h3>

													<motion.div>
														<Image
															src={el.img3}
															preview={false}
															className='shadow-2xl rounded-lg'
														/>
													</motion.div>



													<ul className='font-light list-disc'>

														{el.list.map((elem, idx) => {
															return (
																<li className='mb-2' key={idx}>
																	<p className='uppercase text-sm mb-4'>
																		{elem.b}
																	</p>
																	<p className='font-light'>
																		{elem.text}
																	</p>
																	<p className='uppercase text-xs'>
																		Стоимость от <span className='font-semibold text-base'>{elem.price} BYN</span>
																	</p>
																	<p className='text-sm'>
																		время работы от <span className=''>{elem.time}</span>
																	</p>
																	<Divider />
																</li>
															)
														})}
													</ul>
													<p className='text-xs text-gray-600 font-light mt-10'>
														<InfoCircleTwoTone /> Точную стоимость и сроки выполнения Вы можете узнать позвонив по телефону +375 (29) 648-02-08 либо отправив нам сообщение (кнопка ниже).
													</p>
													<Tag
														color="green"
														onClick={() => showModal('Стоимость и сроки')}
													>
														узнать стоимость и сроки
													</Tag>
												</motion.div>
											</motion.div>
										</>
										:
										undefined
									}
								</div>

							

								<Portfolio />

							</div>

							{
								el.content.map(elem => {
									return (
										<article>
											<motion.div
												className='bg-[#042A3F] px-5 py-7 leading-6'
												initial="hidden"
												whileInView="visible"
											>
												<motion.div
													variants={yAnimation}
												>
													<h3 className='font-bold text-[#97DF38]'>
														{elem.h4}
													</h3>
													<p className='font-light text-[#F5F5F5] text-sm'>
														{elem.p}
													</p>
												</motion.div>
											</motion.div>
										</article>
									)
								})
							}


						</React.Fragment>
					)
				})
			}

			<ModalComp question={true} isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} />
		</section>
	)
}
