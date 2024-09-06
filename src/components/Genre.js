import Movie from "./Movie";

function Genre({ genreName, description, movies }) {
  // Function to render individual movie
  const movieInfo = (movie) => {
    const { title, year, imageSrc } = movie;
    return (
      <Movie key={title + year} title={title} year={year} imageSrc={imageSrc} />
    );
  };

  return (
    <>
      <h2>{genreName} Movies</h2>
      <p>{description}</p>
      {movies.map(movieInfo)}
    </>
  );
}

export default Genre;
