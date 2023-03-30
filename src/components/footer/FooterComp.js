// import { Button } from 'antd'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from 'antd'
import { PhoneOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons'
import {DrawerComp} from '../drawer/DrawerComp'


export const FooterComp = () => {
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

  
  const titleAnimation2 = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }

  const adressAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1.7
      }
    }
  }

  


  return (
    <footer className='pt-10 h-[70vh] overflow-hidden relative'>
      <div className='container'>
        <div className='flex flex-col justify-between text-[#f5f5f5]'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className='flex'
          >
            <motion.h2
              variants={titleAnimation2}
              className='text-2xl font-extrabold uppercase'
            >
              aprostyle.by
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            className='flex flex-col justify-between'
          >
            <motion.p
              variants={adressAnimation}
              className='font-light'
            >
              Профессиональное Автоателье в Минске.
            </motion.p>
            <motion.div
              variants={adressAnimation}
              className='flex justify-between items-start'>
              <div className='text-2xl font-extralight flex flex-col '>


                <a href='tel:80296480208' className='mb-2'>
                  <PhoneOutlined className='text-[#97DF38]' />{' '}
                  +375 (29) 648-02-08
                </a>

                {/* <a href='tel:80293613612'>
                  <PhoneOutlined className='text-[#97DF38]' />{' '}
                  +375 (29) 000-00-00
                </a> */}
              </div>
            </motion.div>
            <motion.div
              variants={adressAnimation}
              className='flex justify-between items-start mt-2'>
              <div className='text-2xl font-extralight flex flex-col'>


                <a href='tel:80293089091'>
                  <EnvironmentOutlined className='text-[#97DF38] mb-4' />{' '}
                  г. Минск ул. Минская 100
                </a>

                {/* <a href="mailto:Androsenko406@gmail.com" className='text-base pl-1'>
                  <MailOutlined className='text-[#97DF38]' />{' '}&nbsp;
                  androsenko406@gmail.com
                </a> */}
              </div>
            </motion.div>

            <motion.div
              className='text-white mt-8'
              variants={adressAnimation}
            >
              <p className='text-xs uppercase font-light'>
                запишитесь заранее на определённое время и получите скидку<span className='text-[#97DF38] text-sm'> 10%</span> на перетяжку или ремонт Вашего салона.
              </p>
              <Button
                type='primary'
                ghost
                className='uppercase'
                onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
              >
                Записаться
              </Button>
            </motion.div>
          </motion.div>

          <DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />


          <div className='flex items-center absolute bottom-1'>
            <p className="
              font-poppins
              font-normal
              text-center
              sm:text-[14px]
              xy:text-[10px]
              xyy:text-[10px]
              leading-[27px]
              text-gray-500
              "
            >
              Copyright Ⓒ 2023. Разработка и продвижение <a href="https://vi-tech.by" className="text-gradient text-cyan-600" rel="noreferrer" target="_blank">VI:TECH</a>. &nbsp;
            </p>
          </div>
        </div>
      </div>
    </footer >
  )
}
