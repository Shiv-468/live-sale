import React, { useCallback, useRef, useState } from 'react'
import UnionContractTop from '../assets/images/webp/UnionContractTop.webp'
import UnionContractBottom from '../assets/images/webp/UnionContractBottom.webp'
import Ellipse2L from '../assets/images/webp/Ellipse2L.webp'
import { Container } from 'react-bootstrap'

const Contract = () => {
    const textCopy = useRef(null)
    const [text, settext] = useState('');
    const copytoclipboard = useCallback(() => {
        textCopy.current?.select();
        window.navigator.clipboard.writeText(textCopy.current?.value);
      }
        , [text])
  return (
   <section className='ContractBG bg-black position-relative section_margin' id='WhitePaper'>
    <div className=" position-absolute Ellipse2L z-1">
      <img src={Ellipse2L} alt="Ellipse2L" className=' w-100' />
    </div>
    <img src={UnionContractTop} alt="UnionContractTop" className=' w-100 z-0' />
    <Container className='contract_paddings max_width_1140' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <h2 className=' mb-0 font_xl line_height_xl font_Manrope light_white fw-semibold text-center'><span className=' color_yellow'>$CLAIR</span> Smart Contract Address</h2>
        <div className=" d-flex align-items-center CopyDiv mt-4 mx-auto">
            <input ref={textCopy} type="text" id='none' value='0xFD1929755F73f974648daD00ab491a7C44a00eeD' className=' CopyInput w-100 white_smoke font_sm line_height_xmd fw-normal font_Manrope' />
            <button onClick={copytoclipboard} className=' common_btn btn_transform color_black fw-bold font_sm line_height_xmd font_Manrope'>Copy</button>
        </div>
        <p className=' mb-0 font_Manrope font_sm line_height_xmd fw-normal color_gray max_width_810 text-center mx-auto margin_top_32'>Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</p>
    </Container>
    <img src={UnionContractBottom} alt="UnionContractBottom" className=' w-100 z-0' />
   </section>
  )
}

export default Contract