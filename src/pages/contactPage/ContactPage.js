import React from 'react'
import { Helmet } from "react-helmet"

export const ContactPage = () => {
	return (
		<>
			<section className='xyy:px-5 sm:container sm:mx-auto pt-10 relative'>
				<Helmet>
					<title>{''}</title>
					<meta name="description" content={''} />
				</Helmet>

				<h1 className='text-2xl uppercase font-black mb-6 text-[#97DF38]'>
					Наши контакты
				</h1>
				<div className='text-lg font-extralight flex flex-col justify-between items-start text-[#f5f5f5]'>
					<a href=""
						title="Наш адрес"
						target='_blank'
						rel="noreferrer"
						className='mb-3'
					>
						г.Минск, Минская 100
					</a>
					<a
						href="mailto:Androsenko406@gmail.com"
						title="Наша почта"
						className='mb-3'
					>
						Androsenko406@gmail.com
					</a>
					<a href='tel:80296480208'>+375 (29) 648-02-08</a>
				</div>


			</section>
			<div className='mt-10 relative'>
			<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acbce93c0e7fd79b0b9e33c1d4e4ec6897b8e0c4d34504ff0fc760d2076729ff7&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
			</div>
		</>
	)
}
