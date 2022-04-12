import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <section>
            <Carousel
                autoPlay
                infiniteLoop
                
                interval={1000}
            >
                <div>
                    <img loading='lazy' src="/images/slider-1.jpg" alt="Slider 1" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-2.jpg" alt="Slider 2" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-3.jpg" alt="Slider 3" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-4.jpeg" alt="Slider 4" />
                </div>
            </Carousel>
        </section>
    )
}

export default Slider;