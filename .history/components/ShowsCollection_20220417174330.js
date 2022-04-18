import React from 'react'

function ShowsCollection({ results, title }) {
    return (
        <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto'>
            <h2>{title}</h2>
        </div>
    )
}

export default ShowsCollection