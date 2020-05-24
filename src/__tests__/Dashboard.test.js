import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Dashboard } from "../components/movieDashboard/Dashboard";
import { renderWithRedux } from "../StoreFactory";
import MovieCard from "../components/movieDashboard/MovieCard";
import MovieList from "../components/movieDashboard/MovieList";
import SearchForm from "../components/movieDashboard/SearchForm";
import { MOVIE_NEXT_BUTTON } from "../actions";

afterEach(cleanup);

const fakeMovie = {
  title: "Star Wars",
  image: "coolimage.jpg"
};

const fakeMovieSelect = ["Star Wars", "Fantasy Island"];

describe("Movie Dashboard", () => {
  it("when user selects movie, view details appears on movie card", () => {
    const setMovieSelect = jest.fn();
    const { getByTestId, getByText } = renderWithRedux(
      <MovieCard
        movie={fakeMovie}
        movieSelect={fakeMovieSelect}
        setMovieSelect={setMovieSelect}
      />
    );
    const img = getByTestId("img");
    fireEvent.click(img);
    const details = getByText(/View Details/i);
    expect(details).toBeInTheDocument();
  });

  // it("saves selected movie to the redux store", () => {
  //   const { getByTestId } = renderWithRedux(<Dashboard />);
  //   // render Movie Card now and do on click
  //   const next = getByTestId("next-btn");
  // });
});

test.skip("next button appears when user clicks on movie", () => {
  let movie = jest.fn();
  let movieSelect = jest.fn();
  let toggleNext = jest.fn();
  const card = renderWithRedux(
    <MovieCard movie={movie} movieSelect={movieSelect} />
  );
  fireEvent.click(card);
  expect(store.NextButton).toBeTruthy();
});

test("search field updates value", () => {
  const { getByTestId } = renderWithRedux(<SearchForm />);
  const input = getByTestId("search");
  input.value = "Star Wars";
  fireEvent.change(input);
  expect(input.value).toEqual("Star Wars");
});
