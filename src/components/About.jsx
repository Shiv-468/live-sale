import React from 'react'
import { Container } from 'react-bootstrap'
import Flatcoin from '../assets/images/webp/Flatcoin.png'
import Tharasis from '../assets/images/webp/Tharasis.png'
import Etherium from '../assets/images/webp/Etherium.png'
import VenusBNB from '../assets/images/webp/VenusBNB.png'
import Gradborder from '../assets/images/webp/gradborder.png'
import Aboutdino from '../assets/images/webp/Aboutdino.png'
const About = () => {
  return (
   <section className=' bg-black position-relative'>
    <div className=" position-absolute Aboutdino d-none d-md-block z-0">
        <img src={Aboutdino} alt="Aboutdino" className=' w-100' />
    </div>
    <Container className='max_width_1140 z-1'>
        <div className="AboutCardbg mx-auto z-1">
        <div className="AboutCard z-1">
            <div className=" d-flex justify-content-between z-1">
                <div className=" d-flex flex-column z-1">
                    <div className=" d-flex align-items-center justify-content-evenly max_width_254">
                        <div className=" d-flex flex-column">
                            <p className=' mb-0 white_smoke font_sm line_height_xmd font_Manrope fw-normal'>1 $Clair</p>
                            <p className=' mb-0 color_yellow font_sm line_height_xmd font_Manrope fw-bold'>0.00387 $</p>
                        </div>
                        <img src={Gradborder} alt="Gradborder" className='mx_28' />
                        <div className=" d-flex flex-column">
                        <p className=' mb-0 white_smoke font_sm line_height_xmd font_Manrope fw-normal'>Raised Amount</p>
                        <p className=' mb-0 color_yellow font_sm line_height_xmd font_Manrope fw-bold'>332,123$</p> 
                        </div>
                    </div>
                    <div className=" d-flex gap_14 pt-3">
                        <div className="about_coinbox d-flex align-items-center justify-content-center">
                            <img src={Flatcoin} alt="Flatcoin" />
                        </div>
                        <div className="about_coinbox d-flex align-items-center justify-content-center">
                        <img src={Tharasis} alt="Tharasis" />
                        </div>
                        <div className="about_coinbox d-flex align-items-center justify-content-center">
                        <img src={Etherium} alt="Etherium" />
                        </div>
                        <div className="about_coinbox d-flex align-items-center justify-content-center">
                        <img src={VenusBNB} alt="VenusBNB" />
                        </div>
                    </div>
                    <button className='buy_btn font_sm line_height_xmd fw-bold font_Manrope'>Buy Now</button>
                </div>
            </div>
        </div>
        </div>    
        <div className=" d-flex flex-column align-items-center justify-content-center z-1">
            <h2 className=' mb-0 font_xl line_height_xl fw-semibold light_white aboutpadding_top z-1'>About <span className=' color_yellow fw-bold'>$CLAIR</span></h2>
            <p className=' mb-0 color_gray font_Manrope fw-normal font_sm line_height_xmd max_width_776 z-1 text-center mt-3'>As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch of sarcasm to the otherwise serious discussions in the crypto space.</p>
            <p className=' mb-0 color_gray font_Manrope fw-normal font_sm line_height_xmd max_width_776 z-1 text-center margin_top_12'>In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, the best way to confront challenges is with a good laugh.</p>
            <p className=' mb-0 color_gray font_Manrope fw-normal font_sm line_height_xmd max_width_776 z-1 text-center margin_top_12'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding it with style. The bad players better watch out; the crypto defender is here, armed with memes and ready to act.</p>
            <div className="common_btn font_Manrope font_sm line_height_xmd fw-bold color_black margin_top_32 z-1">Learn More</div>
        </div>
    </Container>
   </section>
  )
}

export default About