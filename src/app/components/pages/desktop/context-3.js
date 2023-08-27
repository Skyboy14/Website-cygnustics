"use client"

import Image from 'next/image';
import MainBanner from '../../../../../assets/LandingPage-Images/Landingpage-1Whoweare.png'

import '../stylesheet/context-3.css'

import { longArrowRight } from 'react-icons-kit/fa/longArrowRight'
import Icon from 'react-icons-kit';

function Context3() {
    return (
        <div className='cover-3'>
            <div>
                <div className='title-3'>
                    Who We Are
                </div>
                <p className='heading-3'>
                    “ To Foster More
                    <br />
                    Promising Tomorrows,
                    <br />
                    We Employ Innovation and
                    <br />
                    Shared Wisdom ”
                </p>

                <p className='content-3'>
                    We are an ardent provider of comprehensive food safety and quality
                    <br />
                    software solutions, along with top-notch IT services, empowering the
                    <br />
                    industry with cutting-edge
                    <br />
                    technology.
                    Our integrated solutions automate regulatory compliance, mitigate
                    <br />
                    risks, and enhance operational efficiency, while upholding the
                    <br />
                    highest standards of excellence.

                </p>
                {/* <p className='knowMore-3'>
                    Know More
                    <Icon className='arrow-3' icon={longArrowRight} />
                </p> */}

            </div>
            <Image
                src={MainBanner}
                width={700}
                alt="Picture of the author"
            />
        </div>
    )
}

export default Context3;