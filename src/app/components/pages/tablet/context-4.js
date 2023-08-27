"use client"

import Image from 'next/image';
import MainBanner from '../../../../../assets/LandingPage-Images/Landingpage-2.Whatwedo.png'

import '../styleSheet/context-4.css'

function Context4() {
    return (
        <div>
            <div className='cover-4-tab' style={{ marginBottom: '20px' }}>

                <Image
                    src={MainBanner}
                    width={700}
                    alt="Picture of the author"
                />
                <did className='content-4-tab-a'>
                    <div className='content-4-tab-tag'>
                        <div className='content-4-WWD' style={{ margin: 0, paddingRight: '10px' }}>
                            What We Do
                        </div>
                    </div>
                    <p className='content-4-title-WWD' style={{ marginRight: '20px' }}>
                        “ Drive Business Growth with
                        Groundbreaking Solutions ”
                    </p>
                </did>
            </div>
            <div>
                <p className='content-4-tab'>
                    We specialize in providing comprehensive services and
                    technologies to ensure seamless operations and
                    uncompromising safety standards in the food industry.
                    With our IT services, we provide flawless deployment,
                    resilient system integration, streamlined data
                    administration, and unwavering technical assistance,
                    guaranteeing our clients attain peak performance and
                    unwavering dependability.
                </p>
            </div>
        </div>
    );
}

export default Context4;