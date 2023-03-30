import { Carousel, Image } from 'antd'

import krisha from '../../images/carousel/krisha.webp'
import banya from '../../images/carousel/banya.webp'
import kamin from '../../images/carousel/kamin.webp'
import zabor from '../../images/carousel/zabor.webp'
import plumber from '../../images/carousel/plumber.webp'

import { useScreens } from '../../constants/Constants'


const CarouselComp = () => {
const screens = useScreens()
	
	return (
		<Carousel
			autoplay
			effect='fade'
			className=''
		>
		
			<div>
				<Image src={kamin} preview={false} />
			</div>
			<div>
				<Image src={krisha} preview={false} />
			</div>
			<div>
				<Image src={banya} preview={false} />
			</div>
			<div>
				<Image src={zabor} preview={false} />
			</div>
			<div>
				<Image src={plumber} preview={false} />
			</div>
			

		</Carousel>

	)
}
export default CarouselComp
