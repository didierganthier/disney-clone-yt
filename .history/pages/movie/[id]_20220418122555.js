import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import Header from '../../components/Header';
import Hero from '../../components/Hero';

function Movie({ result }) {
    const [session] = useSession();

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div>
            <Head>
                <title>{result.title || result.original_name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {!session ? <Hero /> : (
                <section className='relative z-50'>
                    <div className='relative min-h-[calc(100vh-72px)]'>
                        <Image
                            src={
                                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                                `${BASE_URL}${result.poster_path}`
                            }
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                            alt="Movie Poster"
                        />
                    </div>
                    <div className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>{result.title || result.original_name}</h1>
                        <div className='flex items-center space-x-3 md:space-x-5'>
                            <button className='text-xs md:text-base bg-[#f9f9f9]'>
                                <img src='/images/play-icon-black.svg' alt='Play' />
                                <span>Play</span>
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Movie;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const { id } = context.query
    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then(res => res.json())

    return {
        props: {
            session,
            result: request,
        }
    }
}