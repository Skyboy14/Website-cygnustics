import Image from 'next/image';
import React from 'react';
import Logo1 from '../../../../assets/Menu-Creations/Creations-1.png'
import Logo2 from '../../../../assets/Menu-Creations/Creations-2.png'
import Logo3 from '../../../../assets/Menu-Creations/Creations-7.png'
import Logo4 from '../../../../assets/Menu-Creations/Creations-5.png'
import Logo5 from '../../../../assets/Menu-Creations/Creations-6.png'
import Logo6 from '../../../../assets/Menu-Creations/Creations-3.png'
import Logo7 from '../../../../assets/Menu-Creations/Creations-8.png'
import Logo8 from '../../../../assets/Menu-Creations/Creations-4.png'

import '../headerPopUp/stylesheet/sector.css'


export default function CreationsPopUp() {
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
                            Supplier Management Solutions
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
                            Quality Management Solutions
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
                            Compliance Management Solutions
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
                            Learning Management Solutions
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
                            GFSI Software Solutions
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        src={Logo6}
                        style={{ width: '96px', padding: '8px' }}
                        alt="Picture of the author" />
                    <div>
                        <p>
                            Lab Management Solutions
                        </p>
                    </div>
                </div>

            </div>

            <div >

                <div>
                    <Image
                        src={Logo7}
                        style={{ width: '96px', padding: '8px' }}
                        alt="Picture of the author" />
                    <div>
                        <p>
                            Food Safety Program Solutions
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        src={Logo8}
                        style={{ width: '96px', padding: '8px' }}
                        alt="Picture of the author" />
                    <div>
                        <p>
                            Audit and gap assessment solutions
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

;
