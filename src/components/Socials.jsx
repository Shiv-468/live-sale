import React from 'react'
import { Container } from 'react-bootstrap'
import DiscordImg from '../assets/images/webp/Discord.svg'
import Twitter from '../assets/images/webp/twitter.svg'
import Telegram from '../assets/images/webp/telegram.svg'
const Socials = () => {
  return (
    <section className=' bg-black socail_paddings'>
        <Container className='max_width_1140'>
            <div className="socialcard mx-auto d-flex flex-column align-items-center justify-content-center">
                <h2 className=' mb-0 font_xl line_height_xl font_Manrope fw-semibold light_white text-center'>Our <span className=' color_yellow'>Socials</span></h2>
                <p className=' mb-0 color_gray font_sm line_height_xmd font_Manrope fw-normal text-center mt-3'>Join us on social media for exclusive giveaways and stay connected!</p>
                <p className=' mb-0 color_yellow font_xmd line_height_md font_Manrope fw-normal margin_top_32'>“Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"</p>
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