"use client"

import Image from 'next/image';
import MainBanner from '../../../../../assets/LandingPage-Images/Landingpage-1Whoweare.png'

import '../stylesheet/context-3.css'

import { longArrowRight } from 'react-icons-kit/fa/longArrowRight'
import Icon from 'react-icons-kit';

function Context3() {
    return (
        <div>
            <div className='cover-3-tab'>
                <div>
                    <div className='title-3'>
                        Who We Are
                    </div>
                    <p className='heading-3-tab'>
                        “ To Foster More
                        <br />
                        Promising Tomorrows,
                        <br />
                        We Employ Innovation
                        <br />
                        and Shared Wisdom ”
                    </p>

                </div>
                <Image
                    src={MainBanner}
                    width={700}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <p className='content-3-tab'>
                    We are an ardent provider of comprehensive food safety and quality
                    software solutions, along with top-notch IT services, empowering the
                    industry with cutting-edge technology.
                    Our integrated solutions automate regulatory compliance, mitigate
                    risks, and enhance operational efficiency, while upholding the
                    highest standards of excellence.
                </p>
            </div>
        </div>
    )
}

export default Context3;