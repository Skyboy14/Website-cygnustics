"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../../../../../assets/LandingPageSectors/FoodMfg.png";
import Image2 from "../../../../../assets/LandingPageSectors/Banking.png";
import Image3 from "../../../../../assets/LandingPageSectors/lifeScience.png";
import Image4 from "../../../../../assets/LandingPageSectors/Retails.png";
import Image5 from "../../../../../assets/LandingPageSectors/HealthCare.png";
import Image from "next/image";
import '../stylesheet/context-2.css'


const responsive = {
    desktop: {
        breakpoint: { max: 2000, min: 900 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 900, min: 540 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 540, min: 0 },
        items: 1,
    }
};

export default function Context2() {

    return (
        <>
            <div className="title-2">
                We have a strong presence in the sectors of...
            </div>
            <Carousel
                // swipeable={false}
                // draggable={false}
                // showDots
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition=" all transform 200ms ease-in-ease-out"
                transitionDuration={500}
                containerClass="carousel-container"
                // partialVisbile={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                showDots={true}
                renderDotsOutside={true}
                rewind={true}
            // rewindWithAnimation={true}
            // centerMode={true}


            >
                <div className="items-style">
                    <Image
                        src={Image1}
                        // style={{  }}
                        alt="Picture of the author"
                        id='carousel-image-1'
                    />
                </div>
                <div className="items-style">
                    <Image
                        src={Image2}
                        // style={{ paddingLeft: '50px' }}
                        alt="Picture of the author"
                        id='carousel-image-1'
                    />
                </div>
                <div className="items-style">
                    <Image
                        src={Image3}
                        // style={{ paddingLeft: '50px' }}
                        alt="Picture of the author"
                        id='carousel-image-1'
                    />
                </div>
                <div className="items-style">
                    <Image
                        src={Image4}
                        // style={{ paddingLeft: '50px' }}
                        alt="Picture of the author"
                        id='carousel-image-1'
                    />
                </div>
                <div className="items-style">
                    <Image
                        src={Image5}
                        // style={{ paddingLeft: '50px' }}
                        alt="Picture of the author"
                        id='carousel-image-1'
                    />
                </div>
            </Carousel>
        </>
    )

}