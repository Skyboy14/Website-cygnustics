"use client"

import Image from 'next/image';
import MainBanner from '../../../../../assets/Main-page/mainbanner-27.png'

import '../stylesheet/context-1.css'



function Context1() {
    return (
        <>
            <div className='Container' style={{ height: 'auto' }}>
                <Image
                    src={MainBanner}
                    width={700}
                    style={{ margin: 'auto' }}
                    alt="Picture of the author"
                />

                <div id='title' className='mobile-Container'>
                    Creating Top-notch
                    <br />
                    Blueprint For
                    <br />
                    World-class
                    <br />
                    Digital Formation
                </div>
            </div>

        </>)
}

export default Context1;