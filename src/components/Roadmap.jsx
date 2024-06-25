import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Roadmaptrade from '../assets/images/webp/Roadmap.png'
import Phase1botm from '../assets/images/webp/phase1botm.png'
import Phase2botm from '../assets/images/webp/phase2botm.png'
import Phase3botm from '../assets/images/webp/phase3botm.png'
import Ellipse3L from '../assets/images/webp/Ellipse3L.png'
import Ellipse4R from '../assets/images/webp/Ellipse4R.png'
const Roadmap = () => {
  return (
   <section className=' roadmapBG pb-4 position-relative'>
    <div className=" position-absolute Ellipse3L z-1">
      <img src={Ellipse3L} alt="Ellipse3L" className=' w-100' />
    </div>
    <div className=" position-absolute Ellipse4R z-1">
      <img src={Ellipse4R} alt=" Ellipse4R" className=' w-100' />
    </div>
    <h2 className=' mb-0 light_white font_xl line_height_xl fw-semibold font_Manrope text-center'>Roadmap</h2>
    <Container className='max_width_1140'>
      <Row className=' padding_top_100 justify-content-center'>
        <Col md={6} lg={4} className=' d-flex justify-content-center justify-content-md-end phase1padding_top'>
        <div className="Phase_card w-100 position-relative">
        <img src={Phase1botm} alt="Phase1botm" className=' position-absolute Phase1botmimg d-none d-lg-block' />
          <h4 className=' mb-0 font_xlg line_height_lg font_Manrope fw-medium text-white'>Phase 1</h4>
          <ul className=' mb-0 ps-4 mt-3 d-flex flex-column gap-2'>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Team Recruitment</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Social Media</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Audit Smart Contract</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Whitepaper</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Presale Launch</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Community Growth</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>AI Avatars Release</li>
          </ul>
        </div>
        </Col>
        <Col md={6} lg={4} className=' d-flex justify-content-center justify-content-md-start justify-content-xl-center phase2padding_top mt-4 mt-md-0'>
        <div className="Phase_card w-100 position-relative">
        <img src={Phase2botm} alt="Phase1botm" className=' position-absolute Phase2botmimg d-none d-lg-block' />
          <h4 className=' mb-0 font_xlg line_height_lg font_Manrope fw-medium text-white'>Phase 2</h4>
          <ul className=' mb-0 ps-4 mt-3 d-flex flex-column gap-2'>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Official Launch</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Burns 5%</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Major DEX & CEX Listings</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Coinmarketcap</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>CoinGecko</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Influencers Marketing</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>More AI Avatars Release</li>
          </ul>
        </div>
        </Col>
        <Col md={6} lg={4} className=' d-flex justify-content-center justify-content-xl-start mt-4 mt-lg-0'>
        <div className="Phase_card w-100 position-relative">
        <img src={Phase3botm} alt="Phase1botm" className=' position-absolute Phase3botmimg d-none d-lg-block' />
          <h4 className=' mb-0 font_xlg line_height_lg font_Manrope fw-medium text-white'>Phase 3</h4>
          <ul className=' mb-0 ps-4 mt-3 d-flex flex-column gap-2'>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Burns (5% quarterly)</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Rewards Program</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke'>Multiple Partnerships</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke max_width_225'>Create your own AI Avatar Voiceover.</li>
            <li className='list_style font_sm line_height_xmd font_Manrope fw-medium white_smoke max_width_180'>AI Metaverse Avatar Play-to-Earn</li>
          </ul>
        </div>
        </Col>
      </Row>
    </Container>
    <div className=" d-flex Roadmaptradeimg mx-auto">
        <img src={Roadmaptrade} alt="Roadmap" className=' w-100 d-none d-lg-block' />
      </div>
   </section>
  )
}

export default Roadmap