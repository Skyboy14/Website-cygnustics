import Image from 'next/image';
import React from 'react';
import Logo1 from '../../../../assets/Menu-Deliverables/Services-2.RPA.png'
import Logo2 from '../../../../assets/Menu-Deliverables/Services-1.RTA.png'
import Logo3 from '../../../../assets/Menu-Deliverables/Services-3.Tech.Consulting.png'
import Logo4 from '../../../../assets/Menu-Deliverables/Services-4.SupplyChain.png'
import Logo5 from '../../../../assets/Menu-Deliverables/Services-5.EnterpriseSolutions.png'

import '../headerPopUp/stylesheet/sector.css'

export default function DeliverablesPopUp() {
    return (
        <div className='cover'>
            <div >

                <div >
                    <Image
                        src={Logo1}
                        style={{ width: '96px', padding: '8px' }}
                        alt="Picture of the author" />
                    <div>
                        <p>
                            Robotic Process Automation
                        </p>
                    </div>
                </div>
                <div >
                    <Image
                        src={Logo2}
                        style={{ width: '96px', padding: '8px' }}
                        alt="Picture of the author" />
                    <div>
                        <p>
                            Robotic Test Automation
                        </p>
                    </div>
                </div>

            </div>
            <div >

                <div >
                    <Image
                        src={Logo3}
                        style={{ width: '96px', padding: '8px' }}
                        alt="Picture of the author" />
                    <div>
                        <p>
                            Technology Consulting
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        src={Logo4}
                        style={{ width: '96px', padding: '8px' }}
                        alt="Picture of the author" />
                    <div>
                        <p>
                            supply Chain Management
                        </p>
                    </div>
                </div>

            </div>
            <div >

                <div>
                    <Image
                        src={Logo5}
                        style={{ width: '96px', padding: '8px' }}
                        alt="Picture of the author" />
                    <div>
                        <p>
                            Enterprise Solution
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

;
