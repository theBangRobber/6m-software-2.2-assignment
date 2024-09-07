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
    <div className="genre">
      <h2>{genreName} Movies</h2>
      <p>{description}</p>
      <div className="movie-container">{movies.map(movieInfo)}</div>
    </div>
  );
}

export default Genre;
