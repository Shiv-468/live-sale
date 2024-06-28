import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Glyph from '../assets/images/webp/Glyph.webp'
import UnionAuditTop from '../assets/images/webp/UnionAuditTop.webp'
import UnionAuditBottom from '../assets/images/webp/UnionAuditBottom.webp'
import Slider1 from '../assets/images/webp/Slider1.png'
import Slider2 from '../assets/images/webp/Slider2.png'
import Slider3 from '../assets/images/webp/Slider3.png'
import Slider4 from '../assets/images/webp/Slider4.png'
import Slider5 from '../assets/images/webp/Slider5.png'
import Slider6 from '../assets/images/webp/Slider6.png'
import Ellipse3R from '../assets/images/webp/Ellipse3R.webp'
const Audited = () => {
  var settings = {
    variableWidth: true,                
    arrows: false,        
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear'  
  };
  return (
    <section className=' AuditBG  position-relative section_margin' id='Audit'>
      <div className=" position-absolute Ellipse3R z-1">
        <img src={Ellipse3R} alt="Ellipse3R" className=' w-100' />
      </div>
      <img src={UnionAuditTop} alt="UnionAuditTop" className=' w-100 z-0' />
      <Container className='max_width_1140'>
        <Row className='Glyph_paddings'>
          <Col md={6} className=' d-flex justify-content-center position-relative'  data-aos="fade-right">
          <div className=" position-absolute GlyphBG w-100 d-none d-md-block"></div>
            <img src={Glyph} alt="Glyph" className=' w-100 Glyph z-1' />
          </Col>
          <Col md={6} className=' d-flex flex-column align-items-start justify-content-center  mt-4 mt-md-0'  data-aos="fade-left">
            <div className=" d-flex flex-column gap_10">
              <p className=' mb-0 font_Manrope white_smoke font_xmd line_height_md fw-normal'>Rest easy knowing that $CLAIR is </p>
              <h3 className=' mb-0 font_xlg line_height_lg font_Manrope color_yellow fw-semibold'>Fully Audited and 100% Secure.</h3>
              <p className=' mb-0 font_Manrope white_smoke font_xmd line_height_md fw-normal'>Zero Room for Rug Pulls: Invest with Confidence.</p>
            </div>
            <button className=' common_btn font_sm line_height_xmd color_black fw-bold margin_top_32'>Audit</button>
          </Col>
        </Row>
        <div className="yellow_line w-100"></div>
        <Row className=' Glyph_padding_bottom pt-5 flex-column-reverse flex-lg-row'>
          <Col lg={6} className=' d-flex align-items-center justify-content-center justify-content-lg-end mt-4 mt-lg-0' data-aos="fade-right">
            <div className=" d-flex flex-column gap-3 max_width_475">
              <h3 className=' mb-0 font_xlg line_height_lg font_Manrope fw-semibold light_white text-center text-lg-start'>Listing on <span className=' color_yellow'>Major Exchanges</span></h3>
              <p className=' mb-0 font_xmd line_height_md font_Manrope fw-normal white_smoke text-center text-lg-start'>Baby Sinclair’s Team is in action to secure the <span className=' color_yellow'>$CLAIR</span> listing on major exchanges. Exciting milestones ahead.</p>
            </div>
          </Col>
          <Col lg={6}  data-aos="fade-left" className=' d-flex flex-column justify-content-end align-items-center align-items-lg-end'>
            {/*================= slider=================== */}
        <div className="YellowSliderBox px-3 overflow-hidden w-100">
        <Slider {...settings}>
              <div>
                <div className="slider_box bg-white">
                  <img src={Slider1} alt="slider" className='sliderImage' />
                </div>
              </div>
              <div>
                <div className="slider_box bg-white">
                  <img src={Slider2} alt="slider" className='sliderImage' />
                </div>
              </div>
              <div>
                <div className="slider_box bg-white">
                  <img src={Slider3} alt="slider" className='sliderImage' />
                </div>
              </div>
              <div>
                <div className="slider_box bg-white">
                  <img src={Slider4} alt="slider" className='sliderImage' />
                </div>
              </div>
              <div>
                <div className="slider_box bg-white">
                  <img src={Slider5} alt="slider" className='sliderImage' />
                </div>
              </div>
              <div>
                <div className="slider_box bg-white">
                  <img src={Slider6} alt="slider" className='sliderImage' />
                </div>
              </div>
            </Slider>
            <div className=" d-flex align-items-center gap-3 mt-3 mt-sm-4">
              <div className="line1 w-100"></div>
              <div className="line2 w-100"></div>
              <div className="line3 w-100"></div>
            </div>
        </div>
          </Col>
        </Row>
      </Container>
      <img src={UnionAuditBottom} alt="UnionAuditBottom" className=' w-100 z-0' />
    </section>
  )
}

export default Audited