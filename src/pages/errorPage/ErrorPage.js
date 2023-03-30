import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div className='container mx-auto px-10'>
      <Result
        status="404"
        title="404"
        subTitle="Извините, страницы которую вы посетили, не существует."
        extra={<Button
          type="primary"
          onClick={goBack}
        >
          Вернуться назад
        </Button>}
      />
    </div>
  )
}

export default ErrorPage