import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Flatcoin from '../assets/images/webp/Flatcoin.webp'
import Tharasis from '../assets/images/webp/Tharasis.webp'
import Etherium from '../assets/images/webp/Etherium.webp'
import VenusBNB from '../assets/images/webp/VenusBNB.webp'
import Gradborder from '../assets/images/webp/gradborder.webp'
import Aboutdino from '../assets/images/webp/Aboutdino.webp'
import Dotted from '../assets/images/svg/Dotted.svg'
import Clock from '../assets/images/svg/Clock.svg'
import BarIcon from '../assets/images/webp/BarIcon.webp'
import Yellowline from '../assets/images/webp/yellowline.webp'
import Whiteline from '../assets/images/webp/whiteline.webp'
import Ellipse1R from '../assets/images/webp/Ellipse1R.webp'
const { useState, useEffect } = React;
const About = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('8 /25/2024').getTime());
    const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    useEffect(() => {
      setInterval(() => setNewTime(), 1000);
    }, []);
    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime();
        const distanceToDate = countdownDate - currentTime;
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
        setState({ days: days, hours: hours, minutes, seconds });
      }
    };
  return (
   <section className=' bg-black position-relative section_margin' id='about'>
    <div className=" position-absolute Ellipse1R z-1">
        <img src={Ellipse1R} alt=" Ellipse1R" className=' w-100' />
    </div>
    <div className=" position-absolute Aboutdino d-none d-md-block z-0">
        <img src={Aboutdino} alt="Aboutdino" className=' w-100' />
    </div>
    <Container className='max_width_1140 z-1 aboutpadding_bottom'>
        <div className="AboutCardbg mx-auto z-1">
        <div className="AboutCard z-1">
            <Row className=" d-flex justify-content-between z-1 flex-column-reverse flex-lg-row">
             <Col lg={5} className=' d-flex justify-content-center mt-3 mt-lg-0' data-aos="zoom-in-right" >
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
             </Col>
              <Col lg={7} className=' d-flex justify-content-center' data-aos="zoom-in-left">
              <div className=" d-flex flex-column max_width_404">
                <div className="d-flex  justify-content-between">
                  <div className="d-flex flex-column">
                    <h6 className=' font_Manrope fw-normal font_sm line_height_xmd white_smoke mb-0'>Tokens are Sold</h6>
                    <h5 className=' font_Manrope fw-bold  font_sm line_height_xmd color_yellow mb-0'>98,212,738</h5>
                  </div>
                  <div className="d-flex flex-column pr_24">
                    <h6 className=' font_Manrope fw-normal font_sm line_height_xmd white_smoke mb-0'>Tokens Remaining</h6>
                    <h5 className=' font_Manrope fw-bold font_sm line_height_xmd color_yellow mb-0'>80,212,738</h5>
                  </div>
                </div>
                <div className="pt-sm-3 pt-1  position-relative">
                  <div className=" position-absolute line-yellow">
                    <img src={Yellowline} alt="yellowline" />
                  </div>
                  <div className=" position-absolute line-white">
                    <img src={Whiteline} alt="whiteline" />
                  </div>
                  <img src={BarIcon} alt="baricon" className='w-100' />
                </div>
                <h6 className='mb-0  font_Manrope fw-normal font_xsm line_height_sm color_gray pt_6'>Purchase $Clair fast until the price increase.</h6>
                <div className="d-flex align-items-center justify-content-center justify-content-sm-between pt-3 flex-wrap">
                  <div className="d-flex gap_10">
                    <img src={Clock} alt="clock" />
                    <h6 className=' font_Manrope fw-normal font_sm line_height_xsm light_white mb-0 w_sm_80'>Price
                      increase in</h6>
                  </div>
                  <div className="d-flex gap-2 align-items-end  pt-sm-0 pt-2">
                    <div className="d-flex flex-column align-items-center">
                      <h6 className=' font_Manrope fw-normal font_xsm line_height_sm mb-0 color_gray'>Days</h6>
                      <div className="timing_box d-flex justify-content-center  align-items-center font_Manrope fw-normal font_md line_height_xlg light_white">{state.days || '0'}</div>
                    </div>
                    <img src={Dotted} alt="dotted" className='pb_12' />
                    <div className="d-flex flex-column align-items-center">
                      <h6 className=' font_Manrope fw-normal font_xsm line_height_sm mb-0 color_gray'>Hours</h6>
                      <div className="timing_box d-flex justify-content-center  align-items-center font_Manrope fw-normal font_md line_height_xlg light_white">{state.hours || '00'}</div>
                    </div>
                    <img src={Dotted} alt="dotted" className='pb_12' />
                    <div className="d-flex flex-column align-items-center">
                      <h6 className=' font_Manrope fw-normal font_xsm line_height_sm mb-0 color_gray'>Mins</h6>
                      <div className="timing_box d-flex justify-content-center  align-items-center font_Manrope fw-normal font_md line_height_xlg light_white">{state.minutes || '00'}</div>
                    </div>
                    <img src={Dotted} alt="dotted" className='pb_12' />
                    <div className="d-flex flex-column align-items-center">
                      <h6 className=' font_Manrope fw-normal font_xsm line_height_sm mb-0 color_gray'>Secs</h6>
                      <div className="timing_box d-flex justify-content-center  align-items-center font_Manrope fw-normal font_md line_height_xlg light_white">{state.seconds || '00'}</div>
                    </div>
                  </div>
                </div>
              </div>
              </Col>
            </Row>
        </div>
        </div>    
        <div className=" d-flex flex-column align-items-center justify-content-center z-1" data-aos="zoom-out-down">
            <h2 className=' mb-0 font_xl line_height_xl fw-semibold light_white aboutpadding_top z-1'>About <span className=' color_yellow fw-bold'>$CLAIR</span></h2>
            <p className=' mb-0 color_gray font_Manrope fw-normal font_sm line_height_xmd max_width_776 z-1 text-center mt-3'>As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch of sarcasm to the otherwise serious discussions in the crypto space.</p>
            <p className=' mb-0 color_gray font_Manrope fw-normal font_sm line_height_xmd max_width_776 z-1 text-center margin_top_12'>In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, the best way to confront challenges is with a good laugh.</p>
            <p className=' mb-0 color_gray font_Manrope fw-normal font_sm line_height_xmd max_width_776 z-1 text-center margin_top_12'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding it with style. The bad players better watch out; the crypto defender is here, armed with memes and ready to act.</p>
            <button className="common_btn font_Manrope font_sm line_height_xmd fw-bold color_black margin_top_32 z-1">Learn More</button>
        </div>
    </Container>
   </section>
  )
}

export default About