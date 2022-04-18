import React from 'react'

function Movie() {
  return (
    <div>Movie</div>
  )
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${id}&language=en-US&append_to_response=videos`)
  const show = await res.json()

  return {
    props: {
      show
    }
  }
}