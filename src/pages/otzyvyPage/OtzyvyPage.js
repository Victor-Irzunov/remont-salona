import React, { useState } from 'react'
import { Button, Popover, Rate, Avatar, Image, FloatButton } from 'antd'
import { ExclamationCircleOutlined, LineOutlined, UserOutlined } from '@ant-design/icons'
import { Helmet } from "react-helmet"
import { FormOtzyvy } from '../../components/form/FormOtzyvy'
import img1 from '../../images/otzyvy/1.webp'
import img2 from '../../images/otzyvy/2.webp'
import img3 from '../../images/otzyvy/3.webp'
import img4 from '../../images/otzyvy/4.webp'
import img5 from '../../images/otzyvy/5.webp'


const content = (
	<div>
		<p>Отзыв будет опубликован только если это отзыв нашего клиента и после проверки модератора.</p>
	</div>
)

export const OtzyvyPage = () => {
	const [add, setAdd] = useState(false)



	return (
		<section className='py-12 w-full z-10 min-h-[60vh] relative' id='otzyvy'>
			<Helmet>
				<title>{''}</title>
				<meta name="description" content={''} />
			</Helmet>
			<FloatButton.BackTop />
			<div className='container'>
				<div className='text-center mb-12 text-[#97DF38]'>
					<h2 className='text-4xl uppercase'>Наши<span className=''> отзывы</span></h2>
					<LineOutlined style={{ color: '#AFD93B', fontSize: '3rem' }} />
				</div>

				<div className='px-5'>
					<div className='border-b pb-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									М
								</Avatar>
							</div>
							<div className='ml-3 w-1/2 text-[#f5f5f5]'>
								<p className='mb-0 text-lg'>Луцевич Максим</p>
								<p className='text-xs mb-1'>ремонт сидений</p>
								<p className='text-[10px] text-gray-400'>23.08.2019</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4 ml-6'>
								<Image src={img1} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4 text-[#f5f5f5]'>
								Обратился для ремонта сидений, ....... . Работу принял, меня всё устраивает, буду рекомендовать.
							</p>
						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' className='shadow-xl' />
								<div className='ml-2'>
									<p className='text-sm mb-0 text-[#f5f5f5]'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-[#f5f5f5] inline'>Спасибо за Ваш отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									С
								</Avatar>
							</div>
							<div className='ml-3 w-1/2 text-[#f5f5f5]'>
								<p className='mb-0 text-lg'>Лукашевич Стас</p>
								<p className='text-xs mb-1'>перятяжка руля</p>
								<p className='text-[10px] text-gray-400'>11.12.2020</p>
								<Rate allowHalf defaultValue={4.5} />

							</div>
							<div className='w-1/4 ml-6'>
								<Image src={img2} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2 text-[#f5f5f5]'>
							<p className='text-left text-sm mt-4'>
								Обажаю свою ауди, вот только руль протерся, заказал перятяжку, результатом я очень доволен и благодарен.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0 text-[#f5f5f5]'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-[#f5f5f5] inline'>Спасибо за отзыв. Мы делали свою работу.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									В
								</Avatar>
							</div>
							<div className='ml-3 w-1/2 text-[#f5f5f5]'>
								<p className='mb-0 text-lg'>Бакун Виктор</p>
								<p className='text-xs mb-1'>перятяжка сидений</p>
								<p className='text-[10px] text-gray-400'>10.04.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4 ml-6'>
								<Image src={img3} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2 text-[#f5f5f5]'>
							<p className='text-left text-sm mt-4'>
								Заказал перятяжку сидений. Сделали быстро. Ценой и качеством я доволен. Рекомендую!
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0 text-[#f5f5f5]'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-[#f5f5f5] inline'>Спасибо за отзыв.</p>
							</div>
						</div>
					</div>

					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									С
								</Avatar>
							</div>
							<div className='ml-3 w-1/2 text-[#f5f5f5]'>
								<p className='mb-0 text-lg'>Кравчинко Семён</p>
								<p className='text-xs mb-1'>тюнинг ключа</p>
								<p className='text-[10px] text-gray-400'>02.09.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4 ml-6'>
								<Image src={img4} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2 text-[#f5f5f5]'>
							<p className='text-left text-sm mt-4'>
								Ключ как новый, запах кожи. Спасибо. Вы супер!
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0 text-[#f5f5f5]'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-[#f5f5f5] inline'>Спасибо за рекомендацию и отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4 text-[#f5f5f5]'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									М
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Ходосевич Марина</p>
								<p className='text-xs mb-1'>перятяжка руля</p>
								<p className='text-[10px] text-gray-400'>22.11.2022</p>
								<Rate allowHalf defaultValue={4.7} />

							</div>
							<div className='w-1/4 ml-6'>
								<Image src={img5} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Сделали красивый руль, трогать его одно удовольствие. Вы молодцы. Спасибо!
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs  inline'>Спасибо за отзыв.</p>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-14'>
					<div
						style={{
							marginBottom: 16,
						}}
						className='flex items-center justify-end'
					>

						<Popover content={content} title={<div className='text-center'><ExclamationCircleOutlined className='text-2xl text-orange-500 ml-3' /></div>} trigger="click">
							<ExclamationCircleOutlined className='text-xl mr-5 text-[#AFD93B]' />
						</Popover>
						<Button onClick={() => setAdd(true)}>Добавить отзыв</Button>
					</div>
				</div>



			</div>

			{

				add &&
				<div className=''>
					<FormOtzyvy setAdd={setAdd} />
				</div>
			}
		</section>
	)
}
