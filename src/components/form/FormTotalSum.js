import React, { useState } from 'react'
import { Form, Button, Input, message, Upload, Radio } from 'antd'
import InputMask from 'react-input-mask'
import { sendOrderTelegram, sendFotoTelegram } from '../../http/telegramAPI'
import { UploadOutlined } from '@ant-design/icons'

const { TextArea } = Input

export const FormTotalSum = ({ btn = '' }) => {
	const [tel, setTel] = useState('')
	const onFinish = (values) => {
		console.log('Success:', values);

		let messageForm = `<b>Клиент с сайта просит расчёт</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Марка авто:</b> ${values.avto}\n`
		messageForm += `<b>Сообщение:</b> ${values.message}\n`
		messageForm += `<b>Куда ответить:</b> ${values.response}\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		const chat_id = '-1001794221917'
		const formData = new FormData()
		formData.append('photo', values.photo.file.originFileObj)
		formData.append("chat_id", chat_id)


		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) message.success('Мы получили сообщение и скоро Вам ответим')
			})

		sendFotoTelegram(formData)
			.then(data => {
				console.log('data:', data)
			})
	}



	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}
	return (
		<>
			<Form
				name="basic"
				labelCol={{
					span: 24,
				}}
				style={{
					marginTop: '20px'
				}}
				wrapperCol={{
					span: 24,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Телефон"
					
					name="tel"
					tooltip="код оператора и номер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputMask
						placeholder="29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className='border py-1 px-3 rounded-md w-full'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>

				</Form.Item>

				<Form.Item
					name='photo'
				>
					<Upload
						maxCount={1}
					>
						<Button icon={<UploadOutlined />}>Загрузить изображение</Button>
					</Upload>
				</Form.Item>

				<Form.Item
					name='response'
					label='Как Вам ответить?'
				>
					<Radio.Group>
						<Radio value='по телефону'>по телефону</Radio>
						<Radio value='в вайбер'>в вайбере</Radio>
						<Radio value='в телеграмм'>в телеграмме</Radio>
					</Radio.Group>
				</Form.Item>

				<Form.Item
					name='avto'
					label='Марка автомобиля'
				>
					<Input />
				</Form.Item>

				<Form.Item
					name='message'
					label='Ваше сообщение'
				>
					<TextArea placeholder="Напишите, что необходимо сделать" autoSize={{ minRows: 2 }} />
				</Form.Item>


				<Form.Item
					// wrapperCol={{
					// 	offset: 8,
					// 	span: 16,
					// }}
				>
					<Button type="primary" htmlType="submit">
						Рассчитать стоимость работы
					</Button>
				</Form.Item>

			</Form>
			<p className='mt-12 text-gray-500 font-light text-xs'>
				Отправьте нам сообщение и мы ответим Вам по стоимости и срокам.
			</p>
		</>
	)
}
