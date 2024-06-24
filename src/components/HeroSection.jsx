import React from 'react'
import Logo from '../assets/images/webp/logo.png'
import HeroImg from '../assets/images/webp/HeroImg.png'
import { Container,Nav, NavLink } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <section className='HeroBG min_h_820 bg_black'>
      <nav className=' navigationDiv'>
        <Container className='max_width_1140'>
       <div className=" d-flex align-items-center justify-content-between">
       <div className=" d-flex gap_12">
         <div className="Logo">
            <img src={Logo} alt="logo" className=' w-100 ' />
          </div>
          <p className=' mb-0 font_xlg line_height_lg fw-semibold color_yellow font_Manrope'>$CLAIR</p>
         </div>
        <Nav>
          <NavLink to ="#">About</NavLink>
          <NavLink to ="#">Tokenomics</NavLink>
          <NavLink to ="#">Audit</NavLink>
          <NavLink to ="#">Roadmap</NavLink>
          <NavLink to ="#">White Paper</NavLink>
        </Nav>
       </div>
        </Container>
      </nav>
      <Container className='max_width_1140'>
        <div className=" d-flex flex-column align-items-center">
          <h1 className=' mb-0 font_Manrope font_2xl line_height_2xl fw-bold light_white text-center mt-5'>Presale is <span className=' color_yellow'>Live</span></h1>
          <p className=' mb-0 light_white font_sm line_height_xmd mt-3 font_Manrope text-center max_width_702'>Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!</p>
        </div>
        <div className="max_width_810 mx-auto pt-1">
          <img src={HeroImg} alt="HeroImg" className=' w-100' />
        </div>
        <div className="BottomBgImg"></div>
      </Container>

    </section>
  )
}

export default HeroSection