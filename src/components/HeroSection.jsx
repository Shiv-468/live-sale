import React,{useState} from 'react'
import Logo from '../assets/images/webp/logo.webp'
import HeroImg from '../assets/images/webp/HeroImg.webp'
import Nextsection from '../assets/images/webp/nextsection.webp'
import { Container,Dropdown,Nav, NavLink } from 'react-bootstrap'
import Cart from '../assets/images/svg/cart.svg'
import Ellipse1L from '../assets/images/webp/Ellipse1L.webp'
import LanguageIcon from '../assets/images/svg/LanguageIcon.svg'
const HeroSection = () => {
  const [data, setdata] = useState(false);
  function view() {
    setdata(!data)
    if (data === false) {
      document.body.classList.add("overflow_hidden");
    }
    else {
      document.body.classList.remove("overflow_hidden");
    }
  };
  return (
    <section className='HeroBG min_h_820 bg_black position-relative'>
      <div className=" position-absolute Ellipse1L">
        <img src={Ellipse1L} alt="Ellipse1L" className=' w-100' />
      </div>
      <nav className=' navigationDiv'>
        <Container className='max_width_1140'>
       <div className=" d-flex align-items-center justify-content-between">
       <div className=" d-flex gap_12">
         <div className="Logo">
            <img src={Logo} alt="logo" className=' w-100 ' />
          </div>
          <p className=' mb-0 font_xlg line_height_lg fw-semibold color_yellow font_Manrope'>$CLAIR</p>
         </div>
        <Nav className={`${data ? "navShow" : "navhide"} d-flex align-items-center nav_gap mobile_view`}>
          <NavLink to ="#" className='p-0 font_sm fw-medium line_height_xmd font_Manrope white_smoke'>About</NavLink>
          <NavLink to ="#" className='p-0 font_sm fw-medium line_height_xmd font_Manrope white_smoke'>Tokenomics</NavLink>
          <NavLink to ="#" className='p-0 font_sm fw-medium line_height_xmd font_Manrope white_smoke'>Audit</NavLink>
          <NavLink to ="#" className='p-0 font_sm fw-medium line_height_xmd font_Manrope white_smoke'>Roadmap</NavLink>
          <NavLink to ="#" className='p-0 font_sm fw-medium line_height_xmd font_Manrope white_smoke mr_28'>White Paper</NavLink>
          <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className=' LangDropdown'>

                  <img src={LanguageIcon} alt="Languageicon" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">German</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        </Nav>

        <div onClick={view} className={`${data ? "cross" : "menu"}  d-flex flex-column gap-2 d-lg-none`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
       </div>
        </Container>
      </nav>
      <Container className='max_width_1140'>
        <div className=" d-flex flex-column align-items-center " data-aos="zoom-in-up">
          <h1 className=' mb-0 font_Manrope font_2xl line_height_2xl fw-bold light_white text-center mt-5'>Presale is <span className=' color_yellow'>Live</span></h1>
          <p className=' mb-0 light_white font_sm line_height_xmd mt-3 font_Manrope text-center max_width_702'>Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!</p>
          <button className='sclair_btn d-flex align-items-center gap_10 w-100 justify-content-center margin_top_32 bg_yellow color_black font_sm font_Manrope line_height_xmd fw-bold'>
          Buy $Clair
          <img src={Cart} alt="Cart" />
          </button>
        </div>
        <div className="max_width_810 mx-auto pt-1 " data-aos="zoom-in-up">
          <img src={HeroImg} alt="HeroImg" className=' w-100' />
        </div>
 
      </Container>
      <div className="next_section position-absolute">
        <Nav.Link href='#about' className='cursor-pointer z-1 position-relative' >
          <img src={Nextsection} alt="Nextsection" />
        </Nav.Link>
        </div>
    </section>
  )
}

export default HeroSection