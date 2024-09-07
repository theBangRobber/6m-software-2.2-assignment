import Genre from "./Genre";
import groundhogDayImage from "./40yearoldvirgin.png";
import hangoverImage from "./hangover.png";
import ghostImage from "./ghost.png";
import notebookImage from "./notebook.png";

function Container() {
  return (
    <>
      <h1 className="container">Movie App</h1>
      <Genre
        genreName="Comedy"
        description="Movies that entertain with humor, jokes, and light-hearted situations."
        movies={[
          {
            title: "The 40 Year-Old Virgin",
            year: 2005,
            imageSrc: groundhogDayImage,
          },
          {
            title: "The Hangover",
            year: 2009,
            imageSrc: hangoverImage,
          },
        ]}
      />
      <Genre
        genreName="Romance"
        description="Films focused on love stories and emotional relationships between characters."
        movies={[
          {
            title: "Ghost",
            year: 1990,
            imageSrc: ghostImage,
          },
          {
            title: "The Notebook",
            year: 2004,
            imageSrc: notebookImage,
          },
        ]}
      />
    </>
  );
}

export default Container;
