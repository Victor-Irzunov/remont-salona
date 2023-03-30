import React, { useState } from 'react'
import { Form, Button, Input, message, Upload } from 'antd'
import InputMask from 'react-input-mask'
import { sendOrderTelegram, sendFotoTelegram } from '../../http/telegramAPI'
import { UploadOutlined } from '@ant-design/icons'

export const FormTel = ({ btn = 'Жду звонка' }) => {
	const [tel, setTel] = useState('')
	const onFinish = (values) => {
		console.log('Success:', values);

		let messageForm = `<b>Клиент с сайта перетяжка салона просит перезвонить</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		// const chat_id = '-1001794221917'
		// const formData = new FormData()
		// formData.append('photo', values.photo.file.originFileObj)
		// formData.append("chat_id", chat_id)


		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) message.success('Мы получили сообщение и скоро Вам перезвоним')
			})

		// sendFotoTelegram(formData)
		// 	.then(data => {
		// 		console.log('data:', data)
		// 	})
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

				{/* <Form.Item
					name='photo'>
					<Upload>
						<Button icon={<UploadOutlined />}>Click to Upload</Button>
					</Upload>
				</Form.Item> */}

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						{btn}
					</Button>
				</Form.Item>

			</Form>
			<p className='mt-12 text-gray-500 font-light'>
				Оправте нам свой номер телефона и мы Вам перезвоним в ближайшее время.
			</p>
		</>
	)
}
