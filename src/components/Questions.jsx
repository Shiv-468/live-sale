import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import UnionAccordiontop from '../assets/images/webp/UnionAccordiontop.webp'
import UnionAccordionbotm from '../assets/images/webp/UnionAccordionbotm.webp'
import Qmark1 from '../assets/images/webp/Qmark1.webp'
import Qmark2 from '../assets/images/webp/Qmark2.webp'
const Questions = () => {
  return (
    <section className=' bg-black position-relative section_margin'>
        <div className=" position-absolute Qmark1 z-0 d-none d-md-block">
            <img src={Qmark1} alt="Qmark1" className=' w-100' />
        </div>
        <div className=" position-absolute Qmark2 z-0 d-none d-md-block">
            <img src={Qmark2} alt="Qmark2" className=' w-100' />
        </div>
        <div className="accordionbg">
        <img src={UnionAccordiontop} alt="UnionAccordiontop" className=' w-100 z-0 ' />
        <Container className='max_width_1140 z-2'>
            <h2 className=' mb-0 z-2 light_white font_Manrope font_xl line_height_xl fw-semibold text-center accord_padding_top'>Frequently Asked <span className=' color_yellow'>Questions</span></h2>
    <div className="margin_top_60 z-2 max_width_800 mx-auto accord_padding_bottom z-1 position-relative">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <h6 className='acc_head font_Manrope font_sm line_height_xmd fw-normal mb-0 color_gray'>WHAT IS $CLAIR?</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font_Manrope  fw-normal font_sm line_height_xmd mb-0 color_gray max_width_510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='mt-3 mt-sm-4' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className='acc_head font_Manrope font_sm line_height_xmd fw-normal mb-0 color_gray'>Arcu in pellentesque sit odio.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font_Manrope  fw-normal font_sm line_height_xmd mb-0 color_gray max_width_510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='mt-3 mt-sm-4' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className='acc_head font_Manrope font_sm line_height_xmd fw-normal mb-0 color_gray'>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font_Manrope  fw-normal font_sm line_height_xmd mb-0 color_gray max_width_510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='mt-3 mt-sm-4' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className='acc_head font_Manrope font_sm line_height_xmd fw-normal mb-0 color_gray'>Metus augue dictumst sit amet.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font_Manrope  fw-normal font_sm line_height_xmd mb-0 color_gray max_width_510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='mt-3 mt-sm-4' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className='acc_head font_Manrope font_sm line_height_xmd fw-normal mb-0 color_gray'>Elementum viverra tellus tincidunt nunc odio at id ipsum.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font_Manrope  fw-normal font_sm line_height_xmd mb-0 color_gray max_width_510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='mt-3 mt-sm-4' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className='acc_head font_Manrope font_sm line_height_xmd fw-normal mb-0 color_gray'>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font_Manrope  fw-normal font_sm line_height_xmd mb-0 color_gray max_width_510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className='mt-3 mt-sm-4' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className='acc_head font_Manrope font_sm line_height_xmd fw-normal mb-0 color_gray'>Elementum at dui varius consequat fringilla.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font_Manrope  fw-normal font_sm line_height_xmd mb-0 color_gray max_width_510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
    </Container>
    <img src={UnionAccordionbotm} alt="UnionAccordionbotm" className=' w-100 z-0 ' />
        </div>
    </section>
  )
}

export default Questions