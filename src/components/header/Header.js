import React, { useState } from 'react'
import { HeaderInfo } from './headerInfo/HeaderInfo'
import { HeaderMenu } from './headerMenu/HeaderMenu'

export const Header = ({ setHover, hover }) => {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<header className='z-50'>
			<HeaderInfo setIsVisible={setIsVisible} />
			<HeaderMenu isVisible={isVisible} setHover={setHover} hover={hover} />
		</header>
	)
}
