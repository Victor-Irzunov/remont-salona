import React from 'react'
import { Modal } from 'antd'
import { FormTel } from '../form/FormTel'
import { FormQuestion } from '../form/FormQuestion'
import { FormTotalSum } from '../form/FormTotalSum'

export const ModalComp = ({ isModalOpen, title, handleCancel }) => {

	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			<FormTotalSum />

		</Modal>
	)
}
