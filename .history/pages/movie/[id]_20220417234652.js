import React from 'react'

function Movie({ result }) {
  return (
    <div>Movie</div>
  )
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query
  const request = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${id}&language=en-US&append_to_response=videos`).then(res => res.json())

  return {
    props: {
      result: request,
    }
  }
}