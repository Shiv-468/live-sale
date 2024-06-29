import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Iconparkdot from '../assets/images/webp/icon_park_dot.webp'
import TokenImg from '../assets/images/webp/TokenImg.webp'
import TokenFox from '../assets/images/webp/tokenfox.webp'
import Tokenplus from '../assets/images/webp/tokenplus.webp'
import Tokenbaby from '../assets/images/webp/tokenbaby.webp'
import Ellipse2R from '../assets/images/webp/Ellipse2R.webp'
const Tokenomics = () => {
  return (
   <section className=' TokenBG token_padding_top token_padding_bottom position-relative section_margin' id='Tokenomics'>
    <div className=" position-absolute Ellipse2R z-1">
        <img src={Ellipse2R} alt="Ellipse2R" className=' w-100' />
    </div>
    <Container className='max_width_1140 z-3'>
        <Row>
            <Col md={6} className=' d-flex flex-column z-3' data-aos="fade-right">
            <h2 className=' mb-0 font_Manrope font_xl line_height_xl fw-semibold light_white'>Tokenomics</h2>
            <div className=" d-flex gap-3 align-items-center mt-2 mt-sm-3 mb-2 mb-sm-4">
                <p className=' mb-0 font_Manrope font_md line_height_xlg fw-normal white_smoke'>Baby Sinclair</p>
                <div className=" px-3 py-1 sclairDiv">
                    <p className=' mb-0 color_yellow font_Manrope font_md line_height_xlg fw-normal'>$Clair</p>
                </div>
            </div>
            <p className=' mb-0 font_Manrope font_md line_height_xlg fw-normal white_smoke'>Total Tokens</p>
            <p className=' mb-0 font_lg line_height_lg fw-semibold font_Manrope color_yellow mt-1'>100,000,000,000</p>
            <div className=" d-flex gap_12 margin_top_32">
                <img src={Iconparkdot} alt="icon_park_dot" />
                <p className=' mb-0 font_md line_height_xlg font_Manrope white_smoke fw-medium'>1%</p>
                <p className=' mb-0 white_smoke font_sm line_height_xmd font_Manrope fw-normal margin_top_12'>Presale</p>
            </div>
            <div className=" d-flex gap_12 margin_top_12">
                <img src={Iconparkdot} alt="icon_park_dot" />
                <p className=' mb-0 font_md line_height_xlg font_Manrope white_smoke fw-medium'>3%</p>
                <p className=' mb-0 white_smoke font_sm line_height_xmd font_Manrope fw-normal margin_top_12'>Marketing</p>
            </div>
            <div className=" d-flex gap_12 margin_top_12">
                <img src={Iconparkdot} alt="icon_park_dot" />
                <p className=' mb-0 font_md line_height_xlg font_Manrope white_smoke fw-medium'>5%</p>
                <p className=' mb-0 white_smoke font_sm line_height_xmd font_Manrope fw-normal margin_top_12'>Team - locked for 24 months</p>
            </div>
            <div className=" d-flex gap_12 margin_top_12">
                <img src={Iconparkdot} alt="icon_park_dot" />
                <p className=' mb-0 font_md line_height_xlg font_Manrope white_smoke fw-medium'>10%</p>
                <p className=' mb-0 white_smoke font_sm line_height_xmd font_Manrope fw-normal margin_top_12'>Investors - locked for 24 months</p>
            </div>
            <div className=" d-flex gap_12 margin_top_12">
                <img src={Iconparkdot} alt="icon_park_dot" />
                <p className=' mb-0 font_md line_height_xlg font_Manrope white_smoke fw-medium'>21%</p>
                <p className=' mb-0 white_smoke font_sm line_height_xmd font_Manrope fw-normal margin_top_12'>Exchange listings & liquidity</p>
            </div>
            <div className=" d-flex gap_12 margin_top_12">
                <img src={Iconparkdot} alt="icon_park_dot" />
                <p className=' mb-0 font_md line_height_xlg font_Manrope white_smoke fw-medium'>60%</p>
                <p className=' mb-0 white_smoke font_sm line_height_xmd font_Manrope fw-normal margin_top_12'>Rewards and burns</p>
            </div>
            </Col>
            <Col md={6} className=' d-flex align-items-center justify-content-center justify-content-lg-end' data-aos="fade-left">
            <img src={TokenImg} alt="TokenImg" className=' w-100 TokenImg' />
            </Col>
        </Row>
        <div className=" token_Card d-flex align-items-center flex-wrap justify-content-center justify-content-xl-between margin_top_60" data-aos="flip-up">
            <div className=" d-flex gap_20 align-items-center">
                <div className="babydiv w-100 d-flex align-items-center justify-content-center">
                    <img src={TokenFox} alt="TokenFox" className=' w-100 TokenFox' />
                </div>
                <img src={Tokenplus} alt="Tokenplus" className=' Tokenplus w-100' />
                <div className="babydiv w-100 d-flex align-items-center justify-content-center">
                    <img src={Tokenbaby} alt="Tokenbaby" className=' w-100 Tokenbaby' />
                </div>
            </div>
            <div className=" d-flex flex-column gap_10 justify-content-end mt-3 mt-sm-4 mt-xl-0">
                <p className=' mb-0 font_Manrope font_xmd line_height_md fw-semibold light_white text-center text-xl-start'>Baby Sinclair Stands Strong with the Shiba Inu Community</p>
                <p className=' mb-0 font_sm line_height_xmd font_Manrope fw-normal white_smoke text-center text-xl-start'>10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</p>
            </div>
        </div>
    </Container>
   </section>
  )
}

export default Tokenomics