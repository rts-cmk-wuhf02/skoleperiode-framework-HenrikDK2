import React from "react";
import { render, cleanup } from "react-testing-library";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../components/searchParams";
import searchParams from "../components/searchParams";

afterEach(cleanup);
test("SearchParams", async () => {
  const { getByTestId } = render(searchParams);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);
});
