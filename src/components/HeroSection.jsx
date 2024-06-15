import React from 'react'
import Logo from '../assets/images/webp/logo.png'
import { Container } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <section className='HeroBG min-vh-100 bg_black'>
      <nav className=' navigationDiv'>
        <Container>
         <div className=" d-flex gap_12">
         <div className="Logo">
            <img src={Logo} alt="logo" className=' w-100 ' />
          </div>
          <p className=' mb-0 font_xlg line_height_lg fw-semibold color-yellow font_Manrope'>$CLAIR</p>
         </div>
        </Container>
      </nav>

    </section>
  )
}

export default HeroSection