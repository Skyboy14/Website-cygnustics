"use client"

import Image from 'next/image';
import MainBanner from '../../../../../assets/LandingPage-Images/Landingpage-2.Whatwedo.png'

import '../styleSheet/context-4.css'
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight'
import Icon from 'react-icons-kit';

function Context4() {
    return (
        <div className='cover-4' style={{ marginTop: '10px', marginBottom: '0px' }}>
            <did className='content-4'>
                <div className='content-4-WWD' style={{ marginBottom: '10px' }}>
                    <p style={{ margin: 0, paddingRight: '10px' }}>
                        What We Do
                    </p>
                </div>
                <Image
                    src={MainBanner}
                    width={700}
                    // height={300}
                    // style={{ marginLeft: 0 }}
                    alt="Picture of the author"
                />

                <p className='content-4-title-WWD' style={{ marginRight: '28px' }}>
                    “ Drive Business Growth with
                    Groundbreaking Solutions ”
                </p>
                <p className='content-4-Data-WWD' style={{ marginRight: '28px' }}>
                    We specialize in providing comprehensives services and technologies
                    to ensure seamless operations and uncompromising Safety
                    standards in the food industry. With our IT services, we provide flawless
                    deployment, resilient system integration, streamlined data administration, and
                    unwavering technical assistance, guaranteeing our clients attain peak performances
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