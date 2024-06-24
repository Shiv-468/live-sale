import React from 'react'
import { Container, NavLink } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className=' bg_black'>
      <Container className='footer_padding_top max_width_1140'>
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <h2 className=' mb-0 font_Manrope color_yellow font_2xl line_height_2xl fw-semibold text-center'>$CLAIR</h2>
          <p className=' mb-0 margin_top_20 color_gray max_width_626 text-center font_sm line_height_xmd font_Manrope fw-normal'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
            and Baby Sinclair is wielding it with style. The bad players better watch out;</p>
          <p className=' mb-0 color_gray max_width_626 text-center font_sm line_height_xmd font_Manrope fw-normal pb-5'> the crypto defender is here, armed with memes and ready to act.</p>
        </div>
        <div className=" d-flex gap_32 max_width_758 mx-auto flex-wrap">
          <NavLink to="/" className=' font_sm line_height_xmd font_Manrope color_gray2'>About</NavLink>
          <NavLink to="/" className=' font_sm line_height_xmd font_Manrope color_gray2'>Tokenomics</NavLink>
          <NavLink to="/" className=' font_sm line_height_xmd font_Manrope color_gray2'>Audit</NavLink>
          <NavLink to="/" className=' font_sm line_height_xmd font_Manrope color_gray2'>Roadmap</NavLink>
          <NavLink to="/" className=' font_sm line_height_xmd font_Manrope color_gray2'>White Paper</NavLink>
          <NavLink to="/" className=' font_sm line_height_xmd font_Manrope color_gray2'>Privacy   </NavLink>
          <NavLink to="/" className=' font_sm line_height_xmd font_Manrope color_gray2'>Cookies</NavLink>
          <NavLink to="/" className=' font_sm line_height_xmd font_Manrope color_gray2'>Disclaimer</NavLink>
        </div>
       <div className=" d-flex">
       <div className="footer_line w-100 margin_top_40 margin_bottom_26"></div>
       </div>
      </Container>
    </footer>
  )
}

export default Footer