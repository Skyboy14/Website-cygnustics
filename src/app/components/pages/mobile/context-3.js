"use client"

import Image from 'next/image';
import MainBanner from '../../../../../assets/LandingPage-Images/Landingpage-1Whoweare.png'

import '../stylesheet/context-3.css'

import { longArrowRight } from 'react-icons-kit/fa/longArrowRight'
import Icon from 'react-icons-kit';

function Context3() {
    return (
        <div className='cover-3' style={{ marginTop: '10px' }}>
            <div>
                <div className='title-3' style={{ marginBottom: '10px' }}>
                    Who We Are
                </div>
                <Image
                    src={MainBanner}
                    width={700}
                    alt="Picture of the author"
                />
                <p className='heading-3' style={{ marginLeft: '20px', marginTop: '12px' }}>
                    “ To Foster More
                    <br />
                    Promising Tomorrows,
                    <br />
                    We Employ Innovation
                    <br />
                    and Shared Wisdom ”
                </p>

                <p className='content-3' style={{ marginLeft: '15px', marginRight: '30px' }}>
                    We are an ardent provider of comprehensive food safety and quality
                    {/* <br /> */}
                    software solutions, along with top-notch IT services, empowering the
                    {/* <br /> */}
                    industry with cutting-edge
                    {/* <br /> */}
                    technology.
                    Our integrated solutions automate regulatory compliance, mitigate
                    {/* <br /> */}
                    risks, and enhance operational efficiency, while upholding the
                    {/* <br /> */}
                    highest standards of excellence.

                </p>
                {/* <p className='knowMore-3'>
                    Know More
                    <Icon className='arrow-3' icon={longArrowRight} />
                </p> */}

            </div>

        </div>
    )
}

export default Context3;