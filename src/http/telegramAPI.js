import axios from 'axios'
const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
const chat_id = '-1001794221917'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`


export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}
export const sendFotoTelegram = async (obj) => {
	const { data } = await axios.post(`https://api.telegram.org/bot${token}/sendPhoto`,  obj )
	return data
}



// const chat_id = '-1001794221917'
// 		const formData = new FormData()
// 		formData.append('photo', values.photo.file.originFileObj)
// 		formData.append("chat_id", chat_id)
