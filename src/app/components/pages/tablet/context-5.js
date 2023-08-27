"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../../../../../assets/LandingPages-Deliverables/RobaticTest.png";
import Image2 from "../../../../../assets/LandingPages-Deliverables/RoboticProcess.png";
import Image3 from "../../../../../assets/LandingPages-Deliverables/technology.png";
import Image4 from "../../../../../assets/LandingPages-Deliverables/SupplyChainMng.png";
import Image5 from "../../../../../assets/LandingPages-Deliverables/EnterpriseSoln.png";
import Image from "next/image";

import '../stylesheet/context-5.css'


const responsive = {
    desktop: {
        breakpoint: { max: 2000, min: 800 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

export default function Context5() {

    return (
        <>
            <p className="title-5">
                We are dedicated to deliver...
            </p >
            <Carousel
                // swipeable={false}
                // draggable={false}
                // showDots
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition=" all transform 200ms ease-in-ease-out"
                transitionDuration={500}
                containerClass="carousel-container "
                // partialVisbile={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-0-px d-flex align-items-center justify-content-center"
                showDots={true}
                renderDotsOutside={true}
                rewind={true}
            // rewindWithAnimation={true}
            // centerMode={true}


            >

                <Image
                    src={Image1}
                    // width={1000}
                    // height={300}
                    // style={{ margin: 'auto' }}
                    alt="Picture of the author"
                    id='carousel-poster'
                />

                <Image
                    src={Image2}
                    // width={1000}
                    // height={300}
                    // style={{ margin: 'auto' }}
                    alt="Picture of the author"
                    id='carousel-poster'
                />
                <Image
                    src={Image3}
                    // width={1000}
                    // height={300}
                    // style={{ margin: 'auto' }}
                    alt="Picture of the author"
                    id='carousel-poster'
                />
                <Image
                    src={Image4}
                    // width={1000}
                    // height={300}
                    // style={{ margin: 'auto' }}
                    alt="Picture of the author"
                    id='carousel-poster'
                />
                <Image
                    src={Image5}
                    // width={1000}
                    // height={300}
                    // style={{ margin: 'auto' }}
                    alt="Picture of the author"
                    id='carousel-poster'
                />
            </Carousel>
        </>
    )

}