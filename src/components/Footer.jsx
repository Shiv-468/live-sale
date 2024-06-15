import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className=' bg_black'>
      <Container>
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <h2 className=' mb-0 font_Manrope color-yellow font-2xl line_height_2xl fw-semibold text-center'>$CLAIR</h2>
          <p className=' mb-0 margin_top_20 color_gray max_width_626 text-center'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
            and Baby Sinclair is wielding it with style. The bad players better watch out;</p>
          <p className=' mb-0 color_gray max_width_626 text-center'> the crypto defender is here, armed with memes and ready to act.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer