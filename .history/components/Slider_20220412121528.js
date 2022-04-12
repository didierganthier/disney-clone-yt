import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <section>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={5000}
            >
                <div>
                    <img src="/images/slider-1.jpg" alt="Slider 1" />
                </div>
                <div>
                    <img src="/images/slider-1.jpg" alt="Slider 1" />
                </div>
                <div>
                    <img src="/images/slider-1.jpg" alt="Slider 1" />
                </div>
            </Carousel>
        </section>
    )
}

export default Slider;