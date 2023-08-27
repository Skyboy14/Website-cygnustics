"use client"

import Image from 'next/image';
import MainBanner from '../../../../../assets/LandingPage-Images/Landingpage-2.Whatwedo.png'

import '../styleSheet/context-4.css'
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight'
import Icon from 'react-icons-kit';

function Context4() {
    return (
        <div className='cover-4'>

            <Image
                src={MainBanner}
                width={700}
                // height={300}
                // style={{ marginLeft: 0 }}
                alt="Picture of the author"
            />
            <did className='content-4'>
                <div className='content-4-WWD'>
                    <p style={{ margin: 0, paddingRight: '10px' }}>
                        What We Do
                    </p>
                </div>
                <p className='content-4-title-WWD'>
                    “ Drive Business Growth with
                    Groundbreaking Solutions ”
                </p>
                <p className='content-4-Data-WWD'>
                    We specialize in providing comprehensive services and
                    <br />
                    technologies to ensure seamless operations and
                    <br />
                    uncompromising safety standards in the food industry.
                    <br />
                    <br />
                    With our IT services, we provide flawless deployment,
                    <br />
                    resilient system integration, streamlined data
                    <br />
                    administration, and unwavering technical assistance,
                    <br />
                    guaranteeing our clients attain peak performance and
                    <br />
                    unwavering dependability.
                </p>
                {/* <p className='content-4-KM-WWD'>
                    Know More
                    <Icon className='arrow-4' icon={longArrowRight} />
                </p> */}

            </did>
        </div>);
}

export default Context4;