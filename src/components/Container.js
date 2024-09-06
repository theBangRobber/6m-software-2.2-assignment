import Genre from "./Genre";
import Movie from "./Movie";

function Container() {
  return (
    <>
      <h1>Movie App</h1>
      <Genre
        genreName="Comedy"
        description="Movies that entertain with humor, jokes, and light-hearted situations."
        movies={[
          { title: "Groundhog Day", year: 1993 },
          { title: "The Big Lebowski", year: 1998 },
        ]}
      />
      <Genre
        genreName="Romance"
        description="Films focused on love stories and emotional relationships between characters."
        movies={[
          { title: "Casablanca", year: 1942 },
          { title: "The Notebook", year: 2004 },
        ]}
      />
    </>
  );
}

export default Container;
