import Image from 'next/image'
import React from 'react'

function Brands() {
    return (
        <section className='flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 mas-w-[1400px] mx-auto'>
            <div className='brand group'>
                <Image src='/images/disnep.png' alt='Disney Plus' layout='fill' objectFit='cover' />
                <video>
                    <source src='/videos/disney.mp4' />
                </video>
            </div>
        </section>
    )
}

export default Brands 