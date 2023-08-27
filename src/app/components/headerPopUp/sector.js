import Image from 'next/image';
import React from 'react';
import Logo1 from '../../../../assets/Menu-Sectors/Industries-1.png'
import Logo2 from '../../../../assets/Menu-Sectors/Industries-5.png'
import Logo3 from '../../../../assets/Menu-Sectors/Industries-3.png'
import Logo4 from '../../../../assets/Menu-Sectors/Industries-2.png'
import Logo5 from '../../../../assets/Menu-Sectors/Industries-4.png'

import '../headerPopUp/stylesheet/sector.css'
export default function SectorsPopUp() {
    return (
        <>
            <div className='cover'>
                <div >

                    <div >
                        <Image
                            src={Logo1}
                            style={{ width: '96px', padding: '8px' }}
                            alt="Picture of the author" />
                        <div>
                            <p>
                                Food Manufactuing
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
                                Health care
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
                                Life Science
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
                                Retail
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
                                Banking
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

;
