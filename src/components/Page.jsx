import { Container } from '@mui/system'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Page = () => {

  const context = useOutletContext()
  return (
    <Container
    sx={{
      mt:20,
      bgcolor:'red'
    }}>
      <div>Page Number: {context.page_num}</div>
    </Container>
  )
}

export default Page