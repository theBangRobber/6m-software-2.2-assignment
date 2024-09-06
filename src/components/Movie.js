function Movie({ title, year, imageSrc }) {
  return (
    <>
      <img
        src={imageSrc}
        alt={title}
        style={{ width: "100px", height: "150px", objectFit: "cover" }}
      />
      <h3>{title}</h3>
      <p>Released: {year}</p>
    </>
  );
}

export default Movie;
