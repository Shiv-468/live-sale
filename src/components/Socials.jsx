import React from 'react'
import { Container } from 'react-bootstrap'
import DiscordImg from '../assets/images/webp/Discord.svg'
import Twitter from '../assets/images/webp/twitter.svg'
import Ellipse5R from '../assets/images/webp/Ellipse5R.png'
import Telegram from '../assets/images/webp/telegram.svg'
const Socials = () => {
  return (
    <section className=' bg-black socail_paddings position-relative'>
            <div className=" position-absolute Ellipse5R z-1">
      <img src={Ellipse5R} alt=" Ellipse5R" className=' w-100' />
    </div>
        <Container className='max_width_1140 z-2'>
            <div className="socialcard mx-auto d-flex flex-column align-items-center justify-content-center z-2">
                <h2 className=' mb-0 font_xl line_height_xl font_Manrope fw-semibold light_white text-center z-2'>Our <span className=' color_yellow'>Socials</span></h2>
                <p className=' mb-0 color_gray font_sm line_height_xmd font_Manrope fw-normal text-center mt-3 z-2'>Join us on social media for exclusive giveaways and stay connected!</p>
                <p className=' mb-0 color_yellow font_xmd line_height_md font_Manrope fw-normal margin_top_32 text-center'>“Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"</p>
                <div className=" d-flex gap-3 margin_top_32">
                    <a href="https://discord.com/channels/984345847628181504/984345847628181513" target='_blank' className='SocialLink  d-flex align-items-center justify-content-center'>
                        <img src={DiscordImg} alt="DiscordImg" />
                    </a>
                    <a href="https://x.com/?lang=en" target=' _blank' className='SocialLink  d-flex align-items-center justify-content-center'>
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="https://telegram.org/" target='_blank' className='SocialLink  d-flex align-items-center justify-content-center'>
                        <img src={Telegram} alt="Telegram" />
                    </a>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Socials