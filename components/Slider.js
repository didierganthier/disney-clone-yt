import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <section className='relative mt-7 shadow-2xl max-w-screen-2xl mx-auto'>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={5000}
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