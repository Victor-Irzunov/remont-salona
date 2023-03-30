import React, { useState } from 'react'
import { Button, Divider } from 'antd'
// import { motion } from "framer-motion"
// import { Link as LinkScroll } from 'react-scroll'
import * as icons from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import { Link } from 'react-router-dom'

export const MenuMobil = ({ onClose }) => {
	const [open, setOpen] = useState(false)
	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})

	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
		}
	}


	return (
		<div className='h-full'>
			<nav className='h-full'>
				<ul className='h-full flex flex-col justify-between items-start text-sm cursor-pointer'>
					<li>
						<Link to='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Главная страница
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/bani-i-sauni'
							className="cursor-pointe"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Перетяжка руля
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/pechi-i-kamini'

							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Перетяжка салона
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/remont-krishi'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Перетяжка потолка
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
			
					<li>
						<Link to='/uslugi/remont-krishi'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Перетяжка ручек, чехлов КПП
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
			
					<li>
						<Link to='/uslugi/remont-krishi'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Перетяжка торпедо
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/remont-krishi'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Ремонт салона
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
			
					
					<li>
						<Link to='/otzyvy'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Отзывы
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/kontakt'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Контакты
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li className='mb-3 mt-5'>
						<Button
							type='text'
							onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}
							style={{paddingLeft:'0px' }}
						>
							<icons.ShakeOutlined /> Заказать звонок
						</Button>
					</li>
					<li className='mb-3'>
						<Button
							type='text'
							onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
							style={{paddingLeft:'0px' }}
						>
							<icons.CalendarOutlined /> Записаться на дату
						</Button>
					</li>

				</ul>
			</nav>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}
