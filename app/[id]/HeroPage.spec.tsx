import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroPage, { Character, HeroComponentProps } from "./page";
import fetchMock from "jest-fetch-mock";
import { renderAsync } from "../__test__/testUtils";
/**I haven’t played around with this, since I’m not a fan of having my unit and integration tests depend on APIs. That’s what end-to-end tests are for. But I’m quite sure you could make this work. */
fetchMock.enableMocks();

describe("HeroPage", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render the heading", async () => {
    // arrange
    const luke: Character = {
      id: 2,
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      hair_color: "blond",
      eye_color: "blue",
    };

    fetchMock.mockResponseOnce(JSON.stringify(luke));

    // act
    await renderAsync<HeroComponentProps>(HeroPage, { params: { id: 2 } });

    // assert
    const headingElement = screen.getAllByTestId("heading");
    expect(headingElement[0]).toHaveTextContent("Luke Skywalker");
  });
});
